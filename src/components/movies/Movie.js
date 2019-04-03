import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Movie extends Component {

    state = {
        reviews: []
    };

    getStyle = () => {
        return {
            color: 'white',
            textDecorationLine: 2,
            display: 'block',
            background: "#71121f",
            padding: '10px',
            borderBottom: '1px #ccc dotted',

        }
    };



    render() {
        const {Title,Poster,imdbRating,Plot} = this.props.movie;
        //const {Title,Poster,imdbRating,Plot, results} = Array.from(this.props.movie);
        const reviews = this.props.movie.results.map((reviewItem) => <li>{reviewItem.author}: {reviewItem.content}</li>);

        return (
            <div style={this.getStyle()}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <img src={Poster} alt=""/>
                        </td>
                        <td>
                            <p>{Title}</p>
                            <p>Rating: {imdbRating}</p>
                            <p>{Plot}</p>
                            <p>{reviews}</p>
                        </td>
                    </tr>
                    <tr>

                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Movie.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default Movie;