import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import { getSelectedAnime } from "../Slices/AnimeListSlice";
import "../Css/AnimeDetail.css";

function AnimeDetail() {
  const { selected } = useSelector((store) => store.animeList);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getSelectedAnime(id));
    }
  }, [id, dispatch]);

  if (!selected) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="detail-container">
        <img src={selected.images?.jpg?.image_url} alt={selected.title} />
        <div className="detail-text">
          <h1>{selected.title}</h1>

          <p>{selected.synopsis}</p>
        </div>
        <div className="details">
          <h4 className="rating">
            <span>Rating:</span> {selected.score}
          </h4>
          <h4 className="rating">
            <span>Episodes: </span>
            {selected.episodes}
          </h4>
          <h4 className="rating">
            <span>Aired:</span> {selected.aired.string}
          </h4>
          <h4>
            <span>Status:</span>
            {selected.status}
          </h4>
        </div>
      </div>
      <Comment/>
    </div>
  );
}

export default AnimeDetail;
