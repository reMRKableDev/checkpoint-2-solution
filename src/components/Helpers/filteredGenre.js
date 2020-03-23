const filteredGenre = (results, genre) =>
  results.movies.filter(movie => (movie.genres.includes(genre) ? movie : null));

export default filteredGenre;
