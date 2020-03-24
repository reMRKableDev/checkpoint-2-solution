import React from "react";
import { Link } from "react-router-dom";

import MovieList from "./Movies-Components/MovieList/MovieList";
import FavList from "./Favorites-Components/FavList/FavList";
import GenresList from "./Genre-Components/GenresList/GenresList";

function Home({
  moviesList,
  favList,
  genresList,
  handleAddMovieToFavList,
  handleRemoveMovieFromFavList,
  handleRandomMovie,
  handleGenreFilter
}) {
  const pickRandomMovie = () => {
    handleRandomMovie();
  };

  const filterGenre = e => handleGenreFilter(e.target.value);

  const returnFavList = () => {
    return favList.length > 0 ? (
      <FavList
        favList={favList}
        handleRemoveMovieFromFavList={handleRemoveMovieFromFavList}
      />
    ) : (
      <p>Favorites List is currently empty!</p>
    );
  };

  return (
    <div>
      <section>
        <Link onClick={pickRandomMovie} to="/randomMovie">
          Pick Random
        </Link>
        <h1>Favorites</h1>
        {returnFavList()}
      </section>
      <section>
        <label htmlFor="genres">Movie Genres</label> <br />
        <select defaultValue="Choose here" id="genres" onChange={filterGenre}>
          <option disabled hidden>
            Choose here
          </option>
          <GenresList genresList={genresList} />
        </select>
      </section>
      <section>
        <h1>Movie List</h1>
        <MovieList
          moviesList={moviesList}
          handleAddMovieToFavList={handleAddMovieToFavList}
        />
      </section>
    </div>
  );
}

export default Home;
