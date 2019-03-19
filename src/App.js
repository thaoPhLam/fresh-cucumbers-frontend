import React, { Component } from 'react';
import logo from './logo.png';
import popcorn from './popcorn.png';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Movies from './components/movies/Movies';
import SearchMovie from './components/movies/SearchMovie';

class App extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: 'Ironman'
      },
      {
        id: 2,
        title: 'Avengers'
      },
      {
        id: 3,
        title: 'Spiderman'
      }
    ]
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">

            <Header />

            <img src={logo} className="App-logo" alt="logo" />
            <img src={popcorn} className="popcorn" alt="popcorn"/>

            <Route exact path="/" render={movies => (
              <React.Fragment>
                  <SearchMovie searchMovie={this.searchMovie}/>
                  <Movies movies={this.state.movies} />
              </React.Fragment>
            )} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
