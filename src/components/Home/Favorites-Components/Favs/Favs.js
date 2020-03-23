import React from "react";

function Favs({ favItem, handleRemoveMovieFromFavList }) {
  const posterFallback = e => {
    e.target.onerror = null;
    e.target.src = "https://via.placeholder.com/300x450";
  };

  const removeMovieFromFavList = () => {
    handleRemoveMovieFromFavList(favItem);
  };

  return (
    <article>
      <figure>
        <img
          src={favItem.posterUrl}
          onError={posterFallback}
          alt="movie-poster"
        />
      </figure>
      <h2>
        {favItem.title}, {favItem.year}
      </h2>
      <div>
        <p>
          <span>
            <strong>Runtime: </strong>
          </span>
          {favItem.runtime} mins
        </p>

        <p>
          <span>
            <strong>Genre: </strong>
          </span>
          {favItem.genres.toString()}
        </p>

        <p>
          <span>
            <strong>Directed by: </strong>
          </span>
          {favItem.director}
        </p>

        <p>
          <span>
            <strong>Actors: </strong>
          </span>
          {favItem.actors}
        </p>

        <p>
          <span>
            <strong>Plot: </strong>
          </span>
          {favItem.plot}
        </p>
      </div>
      <button onClick={removeMovieFromFavList}>Remove from Favs</button>
    </article>
  );
}

export default Favs;
