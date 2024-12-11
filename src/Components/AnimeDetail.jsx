import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
        <div className="detail-content">
          <h1>{selected.title}</h1>
          <div className="content">
            <p>{selected.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeDetail;
