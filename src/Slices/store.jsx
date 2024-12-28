import { configureStore } from "@reduxjs/toolkit";
import AnimeListReducer from "./AnimeListSlice";
import commentReducer from "./CommentSlice";
export const store = configureStore({
  reducer: {
    animeList: AnimeListReducer,
    comment: commentReducer
  }
});
