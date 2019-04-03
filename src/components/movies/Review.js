import React, {Component} from 'react';

class Review extends Component {




    render() {

        return (
            <div>

            </div>
        );
    }
}

/*

    render() {
        const {Title,Poster,imdbRating,Plot} = this.props.movie;

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
 */

export default Review;