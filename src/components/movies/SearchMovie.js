import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StickyHeader from 'react-sticky-header';

import axios from 'axios';

class SearchMovie extends Component {

    state = {
        title: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchMovie(this.state.title);
        this.setState({title: ''})
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <form  onSubmit={this.onSubmit} style={{display: 'flex' }}>

                <input
                    value={this.state.data} onChange={event => this.handleOnChange(event)}
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '10px' }}
                    placeholder="Search for movies..."
                    value={this.state.Title}
                    onChange={this.onChange}
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
    searchMovie: PropTypes.func.isRequired
};

export default SearchMovie;