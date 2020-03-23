import React from "react";
import FavList from "../FavList/FavList";

import { Link } from "react-router-dom";

function Favorites({
  favList,
  handleRemoveMovieFromFavList,
  handleRandomMovie
}) {
  const pickRandomMovie = () => {
    handleRandomMovie();
  };

  return (
    <section>
      <h1>Favorites</h1>
      <Link onClick={pickRandomMovie} to="/randomMovie">
        Pick Random
      </Link>
      {favList.length > 0 ? (
        <FavList
          favList={favList}
          handleRemoveMovieFromFavList={handleRemoveMovieFromFavList}
        />
      ) : (
        <p>Favorites List is currently empty!</p>
      )}
    </section>
  );
}

export default Favorites;
