import React, {Component} from 'react';

class Review extends Component {




    render() {
        const {author,content,dbID} = this.props.review;

        return (
            <div>
                <p>[ {author} ]</p>
                <p>{content}</p>
                <p>{dbID}</p>
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