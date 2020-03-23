const handleFetchMovies = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
  );
  const data = await response.json();
  return data;
};

export default handleFetchMovies;
