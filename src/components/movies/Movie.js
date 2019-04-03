import React, {Component} from 'react';
import PropTypes from 'prop-types';


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
        const {Title,Poster,imdbRating,Plot, results} = this.props.movie;

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
                            <div>{results.map(result => <p> [ {result.author} ] <br /> {result.content} </p> )}</div>
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