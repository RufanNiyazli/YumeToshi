import { useState } from "react";
import Container from "@mui/material/Container";
import "./App.css";
import Header from "./Components/Header";
import AnimeList from "./Components/AnimeList";
import Router from "./Router/Router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Router />
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
