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

  searchMovie = (movieTitle) => {

    axios.get(`http://localhost:8888/movie/search?title=${movieTitle}`)
    //.then(res => this.setState({movies: res.data}))
    .then(res => console.log(res.data))
    /* */
    /*
    fetch(`http://localhost:8888/movie/search?title=${movieTitle}`)
        .then(resp => function () {
          console.log(resp);
        });

    console.log("this is the state");
    console.log(this.state);
     */
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">

            <Header />

            <Route exact path="/" render={() => (
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
