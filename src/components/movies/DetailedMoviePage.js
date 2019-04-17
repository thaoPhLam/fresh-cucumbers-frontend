import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

class DetailedMoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        };
    }

    handleGettingDetailedPage = (dbID) => {
        axios.get(`http://localhost:8888/movie/movieDetails?dbID=${dbID}`, dbID)
            .then(res =>
                this.setState({movie: res.data}));
    };

    render() {
        const {Title,Poster,imdbRating,Plot,dbID} = this.state.movie;

        //this.handleGettingDetailedPage(dbID);

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
                some detailed movie
            </div>
        );
    }
}

export default DetailedMoviePage;