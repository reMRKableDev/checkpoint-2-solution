import React from "react";

import MovieList from "./Movies-Components/MovieList/MovieList";
import Favorites from "./Favorites-Components/Favorites/Favorites";
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
  const filterGenre = e => handleGenreFilter(e.target.value);

  return (
    <div>
      <section>
        <Favorites
          favList={favList}
          handleRemoveMovieFromFavList={handleRemoveMovieFromFavList}
          handleRandomMovie={handleRandomMovie}
        />
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
