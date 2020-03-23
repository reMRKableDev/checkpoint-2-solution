const isMovieDuplicate = (newFavMovie, state) =>
  !state.favList.find(duplicate => duplicate === newFavMovie);
  
export default isMovieDuplicate;
