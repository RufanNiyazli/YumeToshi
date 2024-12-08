import React, { useEffect } from "react";
import "../Css/Header.css";
import { MdOutlineAccountCircle } from "react-icons/md";

function Header() {
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
