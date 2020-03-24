import React from "react";
import Fav from "../Fav/Fav";

function FavList({ favList, handleRemoveMovieFromFavList }) {
  return favList.map(fav => (
    <Fav
      key={fav.id}
      favItem={fav}
      handleRemoveMovieFromFavList={handleRemoveMovieFromFavList}
    />
  ));
}

export default FavList;
