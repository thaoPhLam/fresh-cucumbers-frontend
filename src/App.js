import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Movies from './components/movies/Movies';
import SearchMovie from './components/movies/SearchMovie';
import axios from 'axios';

class App extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    axios.get('http://localhost:8888/movie/index')
        .then(res => this.setState({movies: res.data}));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">

            <Header />

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
