import React from "react";
import { Route, Routes } from "react-router-dom";
import useIsLogged from "../Hooks/useIsLogged";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
function ProtectedRoute() {
   const isLogged = useIsLogged();

   if (isLogged === null) return null;
   return isLogged ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
