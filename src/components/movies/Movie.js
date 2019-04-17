import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class Movie extends Component {
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
        const {Title,Poster,imdbRating,Plot,dbID} = this.props.movie;

        return (
            <div style={this.getStyle()}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <Link>
                                <img src={Poster} alt=""/>
                            </Link>
                        </td>
                        <td>
                            <Link to="/movieDetails">{Title}</Link>
                            <p>Rating: {imdbRating}</p>
                            <p>{Plot}</p>
                        </td>
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