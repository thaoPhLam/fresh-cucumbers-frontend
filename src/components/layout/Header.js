import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Fresh Cucumbers Review Movies</h1>
        </header>
    )
}

const headerStyle = {
    background: 'red',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

export default Header;