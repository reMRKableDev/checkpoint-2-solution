import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Home from "./Home/Home";
import RandomMovie from "./RandomMovie/RandomMovie";

import handleFetchMovies from "./Helpers/handleFetchMovies";
import isMovieDuplicate from "./Helpers/isMovieDuplicate";
import filteredGenre from "./Helpers/filteredGenre";

class App extends Component {
  state = {
    moviesList: [],
    favList: [],
    genresList: [],
    randomMovie: {}
  };

  componentDidMount() {
    handleFetchMovies()
      .then(results =>
        this.setState({
          moviesList: results.movies,
          genresList: results.genres
        })
      )
      .catch(error => `Something went wrong with API call: ${error}`);
  }

  handleAddMovieToFavList = newFavMovie => {
    !isMovieDuplicate(newFavMovie, this.state)
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
    handleFetchMovies()
      .then(results => {
        this.setState({
          moviesList: filteredGenre(results, genre).filter(Boolean)
        });
      })
      .catch(error => `Something went wrong with API call: ${error}`);
  };

  render() {
    return (
      <section className="App">
        <Router>
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
                  handleRemoveMovieFromFavList={
                    this.handleRemoveMovieFromFavList
                  }
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
        </Router>
      </section>
    );
  }
}

export default App;
