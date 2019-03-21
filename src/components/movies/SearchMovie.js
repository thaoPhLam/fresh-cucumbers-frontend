import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class SearchMovie extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            searchText: '',
            data: ""
        }
    }

    handleOnChange(event){
        this.setState({data: event.target.value});

    }


    handleSubmit(event){
        event.preventDefault();
        axios.get(`http://localhost:8888/movie/search?title=${this.state.data}`)
            .then(res => {
                const search = res.data;
                this.setState(search);
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ display: 'flex' }}>
                <input
                    value={this.state.data} onChange={event => this.handleOnChange(event)}
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '10px' }}
                    placeholder="Search for movies..."
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        );
    }
}

SearchMovie.propTypes = {
    searchMovie: PropTypes.object.isRequired
};

export default SearchMovie;