import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Review from "./Review";

class Reviews extends Component {
    render() {
        return this.props.reviews.map((review) => (
            <Review key={review.id} review={review}/>
        ));
    }
}

Reviews.propTypes = {
    Reviews: PropTypes.array.isRequired,
};

export default Reviews;