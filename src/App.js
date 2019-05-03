import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-sticky-header/styles.css';
import { Button } from 'react-bootstrap';
import Movies from './components/movies/Movies';
import SearchMovie from './components/movies/SearchMovie';
import StickyHeader from 'react-sticky-header';
import axios from 'axios';
import background from "./components/layout/popcorn.jpg";
import Auth from './auth/Auth';

const auth = new Auth();
auth.login();


class App extends Component {
  state = {
    movies: []
  };

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {

    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }

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

    const { isAuthenticated } = this.props.auth;

    return (
      <Router>
        <div>
          <div className="container">
            <div>
              <StickyHeader
                header={

                  <div style={this.getHeaderStyle()} className="Header_root">
                    <div>
                    {
                      !isAuthenticated() && (
                          <Button
                              bsStyle="primary"
                              className="btn-margin"
                              onClick={this.login.bind(this)}
                          >
                            Log In
                          </Button>
                      )
                    }
                    {
                      isAuthenticated() && (
                          <Button
                              bsStyle="primary"
                              className="btn-margin"
                              onClick={this.logout.bind(this)}
                          >
                            Log Out
                          </Button>
                      )
                    }
                    </div>
                    <h1 className="Header_title" style={{color: 'grey'}} onClick={reload}>Fresh Cucumbers</h1>
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

                <Movies movies={this.state.movies}
                />
            )} />
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
