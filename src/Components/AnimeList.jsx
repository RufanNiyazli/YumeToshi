import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAnime } from "../Slices/AnimeListSlice";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import "../Css/AnimeList.css";
import { useNavigate } from "react-router-dom";

function AnimeList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { animes, loading } = useSelector((store) => store.animeList);
  const [expandedCard, setExpandedCard] = useState(null);
  console.log(animes);

  useEffect(() => {
    dispatch(getAnime());
  }, [dispatch]);

  if (loading) {
    console.log("loading...");
    return <div>Yüklənir...</div>;
  }

  const toggleOverlay = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="card-container">
      {animes &&
        animes.map((anime) => (
          <div key={anime.mal_id} className="card">
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <div
              className={`overlay ${
                expandedCard === anime.mal_id ? "expanded" : ""
              }`}
            >
              <div className="text-icon">
                <h3>{anime.title}</h3>
                <div
                  className="icon"
                  onClick={() => toggleOverlay(anime.mal_id)}
                >
                  {expandedCard === anime.mal_id ? (
                    <IoIosArrowDropdown />
                  ) : (
                    <IoIosArrowDropup />
                  )}
                </div>
              </div>
              {expandedCard === anime.mal_id && (
                <div className="overlay-text">
                  <h4 className="rating">
                    <span>Rating:</span> {anime.score}
                  </h4>
                  <h4 className="rating">
                    <span>Episodes: </span>
                    {anime.episodes}
                  </h4>
                  <h4 className="rating">
                    <span>Aired:</span> {anime.aired.string}
                  </h4>
                  <h4>
                    <span>Status:</span>
                    {anime.status}
                  </h4>
                  <button
                    onClick={() => navigate(`/anime-details/${anime.mal_id}`)}
                  >
                    More About
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default AnimeList;
