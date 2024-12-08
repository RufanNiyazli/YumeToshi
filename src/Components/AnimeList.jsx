import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAnime } from "../Slices/AnimeListSlice";
function AnimeList() {
  const dispatch = useDispatch();
  const { animes } = useSelector((store) => store.animeList);

  useEffect(() => {
    dispatch(getAnime());
  }, [dispatch]);

  console.log(animes);
  return (
    <div>
      
    </div>
  )
}

export default AnimeList
