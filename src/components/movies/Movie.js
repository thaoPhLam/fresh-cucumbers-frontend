import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withImportantStyle from 'react-with-important-style'

class Movie extends Component {
    getStyle = () => {
        return {
            display: 'block',
            background: "",
            padding: '10px',
            borderBottom: '1px #ccc dotted',

        }
    };


    render() {
        const {Title,Poster,imdbRating,Plot} = this.props.movie;

        return (
            <div style={this.getStyle()}>
                <p>{Title}</p>
                <img src={Poster} alt=""/>
                <p>Rating: {imdbRating}</p>
                <p>{Plot}</p>
            </div>
        );
    }
}

Movie.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default Movie;