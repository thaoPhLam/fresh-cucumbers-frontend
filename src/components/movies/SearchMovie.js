import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchMovie extends Component {


    render() {
        return (
            <form action="" style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '10px' }}
                    placeholder="Search for movies..."
                />
                <input
                    onChange={this.props.handleSearch}
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