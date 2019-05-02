import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

class Movie extends Component {

    render() {
        const {Title,Poster,imdbRating,Plot,dbID} = this.props.movie;

        return (
            <article className="Movie">
                <h4>
                    <Link to={{pathname: '/movieDetails', state:{dbID:dbID}}}>{Title}</Link>
                    <p>Rating: {imdbRating}</p>
                </h4>
                <div>
                    <Link>
                        <img src={Poster} alt=""/>
                    </Link>
                    <p>{dbID}</p>
                </div>
            </article>
        );
    }
}

Movie.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default Movie;