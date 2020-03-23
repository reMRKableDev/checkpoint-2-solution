import React from "react";
import { Link } from "react-router-dom";

const RandomMovie = ({ randomMovie }) => {
  const posterFallback = e => {
    e.target.onerror = null;
    e.target.src = "https://via.placeholder.com/300x450";
  };

  return (
    <article>
      <Link to="/">Back Home</Link>
      <figure>
        <img
          src={randomMovie.posterUrl}
          onError={posterFallback}
          alt="movie-poster"
        />
      </figure>
      <h2>
        {randomMovie.title}, {randomMovie.year}
      </h2>
      <div>
        <p>
          <span>
            <strong>Runtime: </strong>
          </span>
          {randomMovie.runtime} mins
        </p>

        <p>
          <span>
            <strong>Genre: </strong>
          </span>
          {randomMovie.genres.toString()}
        </p>

        <p>
          <span>
            <strong>Directed by: </strong>
          </span>
          {randomMovie.director}
        </p>

        <p>
          <span>
            <strong>Actors: </strong>
          </span>
          {randomMovie.actors}
        </p>

        <p>
          <span>
            <strong>Plot: </strong>
          </span>
          {randomMovie.plot}
        </p>
      </div>
    </article>
  );
};

export default RandomMovie;
