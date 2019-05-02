import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Movie from "./Movie";
import Review from "./Review";

class DetailedMoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        };
    }

    componentDidMount() {
        const dbID = this.props.location.state.dbID;
        console.log(dbID);
        axios.get(`http://localhost:8888/movie/movieDetails?dbID=${dbID}`, dbID)
            .then(res =>
                this.setState({movie: res.data}));
    };




    render() {

        const {Title,Poster,imdbRating,Plot, results} = this.state.movie;
        console.log(results);
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
                            <div>{results.map(result => <p> [ {result.author} ] <br /> {result.content} </p> )}</div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DetailedMoviePage;