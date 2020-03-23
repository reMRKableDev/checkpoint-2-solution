import React from "react";
import { Link } from "react-router-dom";
import posterFallback from "../Helpers/posterFallback";
import isRandomEmpty from "../Helpers/isRandomEmpty";

const RandomMovie = ({ randomMovie }) => {
  return (
    <article>
      <Link to="/">Back Home</Link>
      {isRandomEmpty(randomMovie) ? (
        <p>
          {" "}
          There were no movies in the Favorites List to randomize. Add some and
          try this again!
        </p>
      ) : (
        <div>
          <figure>
            <img
              src={randomMovie.posterUrl}
              onError={posterFallback}
              alt="movie-poster"
            />
          </figure>

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
        </div>
      )}
    </article>
  );
};

export default RandomMovie;
