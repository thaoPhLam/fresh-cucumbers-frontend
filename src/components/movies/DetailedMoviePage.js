import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Movie from "./Movie";

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
        console.log(this.state.movie)
    };




    render() {
        //let {dbID} =
        //this.handleGettingDetailedPage(dbID);

        const {Title,Poster,imdbRating,Plot} = this.state.movie;

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
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DetailedMoviePage;