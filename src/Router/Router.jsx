import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AnimeDetail from "../Components/AnimeDetail";
import RegisterForm from "../Components/Register";
import Login from "../Components/Login";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/anime-details/:id" element={<AnimeDetail />}></Route>
      </Routes>
    </div>
  );
}

export default Router;
