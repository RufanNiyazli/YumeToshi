import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AnimeDetail from "../Components/AnimeDetail";
import RegisterForm from "../Components/Register";
import Login from "../Components/Login";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../Components/Auth/MainLayout";
import AuthLayout from "../Components/Auth/AuthLayout";
function Router() {
  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route element={<MainLayout/>}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/anime-details/:id" element={<AnimeDetail />}></Route>
          </Route>
        </Route>
        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
