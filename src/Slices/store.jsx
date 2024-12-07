import { configureStore } from "@reduxjs/toolkit";
import AnimeListReducer from './AnimeListSlice'
export const store = configureStore({
  reducer: {
    animeList:AnimeListReducer
  }
});
