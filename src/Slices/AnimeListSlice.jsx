import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  animes: [],
  selected: {},
  loading: false
};

export const getAnime = createAsyncThunk("getAnime", async () => {
  const response = await axios.get(`https://api.jikan.moe/v4/anime`);
  return response.data.data;
});

export const getSelectedAnime = createAsyncThunk(
  "getSelectedAnime",
  async (id) => {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    return response.data.data;
  }
);

const AnimeListSlice = createSlice({
  name: "anime",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAnime.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAnime.fulfilled, (state, action) => {
        state.loading = false;
        state.animes = action.payload;
      })

      .addCase(getAnime.rejected, (state, action) => {
        state.loading = false;
        console.error(action.error.message);
      })
      .addCase(getSelectedAnime.fulfilled, (state, action) => {
        state.selected = action.payload;
      });
  },
  reducers: {}
});

export const {} = AnimeListSlice.actions;

export default AnimeListSlice.reducer;
