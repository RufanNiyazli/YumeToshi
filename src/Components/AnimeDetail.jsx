import React from "react";
import { useParams } from "react-router-dom";

function AnimeDetail() {
  const { id } = useParams();
  return <div>salam{id}</div>;
}

export default AnimeDetail;
