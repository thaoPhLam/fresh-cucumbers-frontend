import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
    getStyle = () => {
        return {
            display: 'block',
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    };

    render() {
        const {Title} = this.props.movie;
        return (
            <div style={this.getStyle()}>
                <p>{Title}</p>
            </div>
        );
    }
}

Movie.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default Movie;