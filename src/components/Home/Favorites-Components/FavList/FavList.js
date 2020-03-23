import React from "react";
import Favs from "../Favs/Favs";

function FavList({ favList, handleRemoveMovieFromFavList }) {
  return favList.map(fav => (
    <Favs
      key={fav.id}
      favItem={fav}
      handleRemoveMovieFromFavList={handleRemoveMovieFromFavList}
    />
  ));
}

export default FavList;
