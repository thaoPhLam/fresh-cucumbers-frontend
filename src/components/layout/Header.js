import React from 'react';
import background from './popcorn.jpg';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Fresh Cucumbers Review Movies</h1>
        </header>
    )
}

const headerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    color: '#fff',
    textAlign: 'left',
    padding: '80px'
};

export default Header;