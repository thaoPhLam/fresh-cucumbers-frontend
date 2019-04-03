import React, {Component} from 'react';
import Movie from './review';
import PropTypes from 'prop-types';

class Reviews extends Component {
    render() {
        return this.props.movies.map((review) => (
            <Review key={review.id} review={review}/>
        ));
    }
}

Reviews.propTypes = {
    Reviews: PropTypes.array.isRequired,
};

export default Movies;