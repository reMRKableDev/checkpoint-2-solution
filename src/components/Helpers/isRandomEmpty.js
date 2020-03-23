const isRandomEmpty = randomMovie => {
  for (let key in randomMovie) {
    if (randomMovie.hasOwnProperty(key)) return false;
  }
  return true;
};

export default isRandomEmpty;
