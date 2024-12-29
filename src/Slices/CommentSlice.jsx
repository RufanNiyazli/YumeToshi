import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(db, "comments"));
      console.log(
        "Şərhlər çəkildi: ",
        querySnapshot.docs.map((doc) => doc.data())
      ); 
      const comments = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt
            ? data.createdAt.toDate().toISOString()
            : null,
          author: data.userName || data.userEmail || "Anonymous"
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
    loading: false, // "idle" deyil, əslində boolean olmalıdır
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true; // Yüklənmə başlayır
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false; // Yüklənmə tamamlanıb
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false; // Yüklənmə bitib, amma xəta var
        state.error = action.payload;
      });
  }
});

export default CommentSlice.reducer;
