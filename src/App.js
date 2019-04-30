import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import 'react-sticky-header/styles.css';
import Movies from './components/movies/Movies';
import SearchMovie from './components/movies/SearchMovie';
import StickyHeader from 'react-sticky-header';
import axios from 'axios';
import background from "./components/layout/popcorn.jpg";
import DetailedMoviePage from "./components/movies/DetailedMoviePage";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";


class App extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    axios.get('http://localhost:8888/movie/index')
        .then(res => this.setState({movies: res.data}));

    }

  searchMovie = (movieTitle) => {
    axios.get(`http://localhost:8888/movie/search?title=${movieTitle}`, movieTitle)
    .then(res =>
        this.setState({ movies: res.data }))
  };

  getHeaderStyle = () => {
    return{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      color: '',
      textAlign: 'left',
      padding: '50px',
    };
  };


  render() {
    let movies = <Movies movies={this.state.movies}/>;

    return (
      <Router>
        <div>
          <div className="container">
            <div>
              <StickyHeader
                header={
                  <div style={this.getHeaderStyle()} className="Header_root">
                    <h1 className="Header_title" style={{color: 'grey'}} onClick={reload}>Fresh Cucumbers</h1>
                    <NavLink style={{
                        background:'blue',
                        color:'white'
                    }} to="/register">Register</NavLink>
                    <br/>
                    <NavLink style={{
                        background:'blue',
                        color:'white'
                    }} to="/login">Login</NavLink>
                    <SearchMovie  searchMovie={this.searchMovie}/>
                  </div>
                }
            >
                <section style={{color: 'white'}}>
                  <p>
                    a
                  </p>
                  <p>
                    a
                  </p>
                  <p>
                    a
                  </p><p>
                    a
                  </p><p>
                    a
                  </p><p>
                    a
                  </p>
                </section>
            </StickyHeader>
          </div>
            <Route exact path="/" render={() => (
              <section className="Movies">
                {movies}
              </section>
            )} />
            <Route path="/register" component={Register}>
            </Route>
            <Route path="/login" component={Login}>
            </Route>
            <Route path="/movieDetails" component={DetailedMoviePage}>
            </Route>
          </div>
        </div>
      </Router>
    );

    function reload () {
      window.location.reload()
    }
  }
}

export default App;
