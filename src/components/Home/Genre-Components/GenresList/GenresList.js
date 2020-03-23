import React from "react";
import Genre from "../Genre/Genre";

function GenresList({ genresList }) {
  return genresList.map((genre, index) => <Genre key={index} genre={genre} />);
}

export default GenresList;
