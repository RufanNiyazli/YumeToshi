import { useState } from "react";
import Container from "@mui/material/Container";
import "./App.css";
import Header from "./Components/Header";
import AnimeList from "./Components/AnimeList";
import Router from './Router/Router'
function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Router />
      </Container>
    </>
  );
}

export default App;
