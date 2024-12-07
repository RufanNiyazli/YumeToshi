import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  animes: [],
  selectedAnime: []
};

export const getAnime = createAsyncThunk("getAnime", async () => {
  const response = await axios.get(`https://api.jikan.moe/v4/anime`);
  return response.data.data;
});
const AnimeListSlice = createSlice({
  name: "anime",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAnime.fulfilled, (state, action) => {
        state.animes = action.payload;
      })
      .addCase(getAnime.rejected, (state, action) => {
        console.error(action.error.message);
      });
  },
  reducers: {}
});

export const {} = AnimeListSlice.actions;

export default AnimeListSlice.reducer;
