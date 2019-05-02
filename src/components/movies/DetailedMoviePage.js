import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Review from "./Review";
import Reviews from "./Reviews";

class DetailedMoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            reviews: []
        };
    }

    componentDidMount() {
        const dbID = this.props.location.state.dbID;
        console.log(dbID);
        axios.get(`http://localhost:8888/movie/movieDetails?dbID=${dbID}`, dbID)
            .then(res =>
                this.setState({movie: res.data, reviews: res.data.results}))
            .catch(err => console.log(err));
    };




    render() {

        const {Title,Poster,imdbRating,Plot} = this.state.movie;
        //const {results} = this.state.movie.reviews;
        //console.log(results);
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <Link>
                                <img src={Poster} alt=""/>
                            </Link>
                        </td>
                        <td>
                            <p>{Title}</p>
                            <p>{imdbRating}</p>
                            <p>{Plot}</p>

                            {/*
                            <div>{results.map(result => <p> [ {result.author} ] <br /> {result.content} </p> )}</div>
                            */}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <Reviews reviews={this.state.reviews} />
            </div>
        );
    }
}

export default DetailedMoviePage;