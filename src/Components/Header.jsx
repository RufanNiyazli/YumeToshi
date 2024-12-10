import React, { useEffect } from "react";
import "../Css/Header.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate=useNavigate()
  return (
    <div className="container">
      <div className="left-side">
        <h1 onClick={()=>navigate(`/`) }>YumeToshi</h1>
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
