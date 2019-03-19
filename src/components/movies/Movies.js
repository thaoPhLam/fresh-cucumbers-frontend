import React, {Component} from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';

class Movies extends Component {
    render() {
        return this.props.movies.map((movie) => (
            <Movie key={movie.id} movie={movie}/>
        ));
    }
}

Movies.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default Movies;