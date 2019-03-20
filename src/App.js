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

  handleSearch = (e) => {
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.props.items;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
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
                  <SearchMovie searchMovie={this.handleSearch}/>
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
