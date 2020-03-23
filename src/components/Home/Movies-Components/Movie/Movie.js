import React from "react";
import posterFallback from "../../../Helpers/posterFallback";

function Movie({ movieItem, handleAddMovieToFavList }) {
  const addMovieToFavList = () => {
    handleAddMovieToFavList(movieItem);
  };

  return (
    <article>
      <figure>
        <img
          src={movieItem.posterUrl}
          onError={posterFallback}
          alt="movie-poster"
        />
      </figure>
      <h2>
        {movieItem.title}, {movieItem.year}
      </h2>
      <div>
        <p>
          <span>
            <strong>Runtime: </strong>
          </span>
          {movieItem.runtime} mins
        </p>

        <p>
          <span>
            <strong>Genre: </strong>
          </span>
          {movieItem.genres.toString()}
        </p>

        <p>
          <span>
            <strong>Directed by: </strong>
          </span>
          {movieItem.director}
        </p>

        <p>
          <span>
            <strong>Actors: </strong>
          </span>
          {movieItem.actors}
        </p>

        <p>
          <span>
            <strong>Plot: </strong>
          </span>
          {movieItem.plot}
        </p>
      </div>
      <button onClick={addMovieToFavList}>Add to Favs</button>
    </article>
  );
}

export default Movie;
