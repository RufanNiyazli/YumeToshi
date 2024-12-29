import React, { useEffect } from "react";
import "../Css/Header.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { FaSignOutAlt } from "react-icons/fa";
import {auth} from '../Firebase'
function Header() {
  const navigate=useNavigate()
  const logOut=async()=>{
    try {
      await signOut(auth)
      toast.success('Ugurla cixdiz hahah')
      navigate('/login')
    } catch (error) {
      console.error('xeta bas verdi '+error.message)
    }
  }
  return (
    <div className="container">
      <div className="left-side">
        <h1 onClick={() => navigate(`/`)}>YumeToshi</h1>
      </div>
      <div className="right-side">
        <input type="text" placeholder="Search" />
        <MdOutlineAccountCircle
          style={{ fontSize: "30px", cursor: "pointer" }}
        />
        <FaSignOutAlt style={{cursor:"pointer", marginLeft:'5px',fontSize:'20px'}} onClick={logOut} />
      </div>
    </div>
  );
}

export default Header;
