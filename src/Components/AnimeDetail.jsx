import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedAnime } from "../Slices/AnimeListSlice";
import '../Css/AnimeDetail.css'
function AnimeDetail() {
  const { id } = useParams();
  const { selected } = useSelector((store) => store.animeList);
  const dispatch = useDispatch();
  console.log(selected);

  useEffect(() => {
    dispatch(getSelectedAnime(id));
  }, []);
  return (
    <div>
      <div className="detail-container">
        <img src={selected.images.jpg.image_url} alt="" />
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
