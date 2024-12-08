import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAnime } from "../Slices/AnimeListSlice";
function AnimeList() {
  const dispatch = useDispatch();
  const { animes, loading } = useSelector((store) => store.animeList);

  useEffect(() => {
    dispatch(getAnime());
  }, [dispatch]);
  if (loading) {
    console.log("loading...");
  } else {
    console.log(animes);
  }

  return (
    <div>
      {animes &&
        animes.map((anime) => (
          <div key={anime.mal_id}>
            <h2>{anime.title}</h2>
            <img src={anime.images.jpg.image_url} alt="" />
            <p>{anime.episodes}</p>
            <span>{anime.score}</span>
          </div>
        ))}
    </div>
  );
}

export default AnimeList;
