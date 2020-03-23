import React, { Component } from "react";
import "./App.css";

import Home from "./Home/Home";
import RandomMovie from "./RandomMovie/RandomMovie";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    moviesList: [],
    favList: [],
    genresList: [],
    randomMovie: {}
  };

  componentDidMount() {
    this.handleFetchMovies()
      .then(results =>
        this.setState({
          moviesList: results.movies,
          genresList: results.genres
        })
      )
      .catch(error => `Something went wrong with API call: ${error}`);
  }

  handleFetchMovies = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
    );
    const data = await response.json();
    return data;
  };

  handleAddMovieToFavList = newFavMovie => {
    const isDuplicateMovie = !this.state.favList.find(
      duplicate => duplicate === newFavMovie
    );

    !isDuplicateMovie
      ? alert("Movie has already been added to Favorites List")
      : this.setState({ favList: [...this.state.favList, newFavMovie] });
  };

  handleRemoveMovieFromFavList = chosenMovie => {
    this.setState(prevState => ({
      favList: prevState.favList.filter(
        movieInList => movieInList !== chosenMovie
      )
    }));
  };

  handleRandomMovie = () => {
    const favList = this.state.favList;
    if (favList) {
      this.setState({
        randomMovie: favList[Math.floor(Math.random() * favList.length)]
      });
    }
  };

  handleGenreFilter = genre => {
    this.handleFetchMovies()
      .then(results => {
        const filteredGenre = results.movies.filter(movie =>
          movie.genres.includes(genre) ? movie : null
        );
        this.setState({
          moviesList: filteredGenre.filter(Boolean)
        });
      })
      .catch(error => `Something went wrong with API call: ${error}`);
  };

  render() {
    return (
      <section className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                moviesList={this.state.moviesList}
                favList={this.state.favList}
                genresList={this.state.genresList}
                handleAddMovieToFavList={this.handleAddMovieToFavList}
                handleRemoveMovieFromFavList={this.handleRemoveMovieFromFavList}
                handleRandomMovie={this.handleRandomMovie}
                handleGenreFilter={this.handleGenreFilter}
              />
            )}
          />
          <Route
            path="/randomMovie"
            render={props => (
              <RandomMovie {...props} randomMovie={this.state.randomMovie} />
            )}
          />
        </Switch>
      </section>
    );
  }
}

export default App;
