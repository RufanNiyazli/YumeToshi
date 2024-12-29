import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useIsLogged from "../../Hooks/useIsLogged";

const AuthLayout= () => {
  const isLogged = useIsLogged();

  if (isLogged === null) return null;
  if (isLogged) {
    return <Navigate to={"/home"} replace />;
  }
  return <Outlet />;
};

export default AuthLayout;
