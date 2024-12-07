import React, { useEffect } from "react";
import "../Css/Header.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { getAnime } from "../Slices/AnimeListSlice";

function Header() {
  const dispatch = useDispatch();
  const { animes } = useSelector((store) => store.animeList);

  useEffect(() => {
    dispatch(getAnime());
  }, [dispatch]);

  console.log(animes);

  return (
    <div className="container">
      <div className="left-side">
        <h1>YumeToshi</h1>
      </div>
      <div className="right-side">
        <input type="text" placeholder="Search" />
        <MdOutlineAccountCircle
          style={{ fontSize: "30px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Header;
