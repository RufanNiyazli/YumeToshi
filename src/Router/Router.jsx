import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AnimeDetail from "../Components/AnimeDetail";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/anime-details/:id" element={<AnimeDetail />}></Route>
      </Routes>
    </div>
  );
}

export default Router;
