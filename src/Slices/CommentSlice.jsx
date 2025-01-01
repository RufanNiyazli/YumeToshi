import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(db, "comments"));

      const comments = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt
            ? data.createdAt.toDate().toISOString()
            : null,
          author: data.userName || data.userEmail || "Anonymous",
        };
      });

      return comments;
    } catch (error) {
      console.error("Şərhləri çəkmək mümkün olmadı: ", error);
      return rejectWithValue(error.message);
    }
  }
);

const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    selectedComments: [],
    selectedAnimeId: "",
    loading: false,
    error: null,
  },
  reducers: {
    getAnimeId: (state, action) => {
      state.selectedAnimeId = action.payload;
    },
    getSelectedComment: (state) => {
      if (!state.selectedAnimeId) {
        console.warn("Selected Anime ID yoxdur.");
        state.selectedComments = [];
        return;
      }
      state.selectedComments = state.comments.filter(
        (comment) => String(comment.anime_id) === String(state.selectedAnimeId)
      );
    },
    addCommentToStore: (state, action) => {
      state.comments.unshift(action.payload); //bu meluamti en qabaga atir
      // state.comments.push(action.payload);//
      if (action.payload.anime_id === state.selectedAnimeId) {
        state.selectedComments.unshift(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { getAnimeId, getSelectedComment, addCommentToStore } =
  CommentSlice.actions;
export default CommentSlice.reducer;
