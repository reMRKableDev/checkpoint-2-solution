import React from "react";
import Movie from "../Movie/Movie";

function MovieList({ moviesList, handleAddMovieToFavList }) {
  return moviesList.map(movie => (
    <Movie key={movie.id} movieItem={movie} handleAddMovieToFavList={handleAddMovieToFavList} />
  ));
}

export default MovieList;
