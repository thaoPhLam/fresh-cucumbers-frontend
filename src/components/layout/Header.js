
import React from 'react';
import {Link} from "react-router-dom";
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import background from "./popcorn.jpg";

import { Router, Route, Switch } from "react-router";
import SearchMovie from "../../App";


function Header() {
    return (
        <StickyHeader
            header={
                <div className="Header_root">

                    <h1  className="Header_title" style={{color: 'grey'}} onClick={reaload}>Fresh Cucumbers</h1>


                </div>
            }
        >
            <section style={{color: 'white'}}>
                <p>
a
                </p>
                <p>
a

                </p>
                <p>
a

                </p>
            </section>
        </StickyHeader>
            )
}

function reaload () {
    window.location.reload()
}

const headerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    color: '',
    textAlign: 'left',
    padding: '80px'
};

const linkStyle = {
    textDecoration: 'none'
};

export default Header;