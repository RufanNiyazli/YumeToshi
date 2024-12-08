import { useState } from "react";
import Container from "@mui/material/Container";
import "./App.css";
import Header from "./Components/Header";
import AnimeList from "./Components/AnimeList";
function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <AnimeList />
      </Container>
    </>
  );
}

export default App;
