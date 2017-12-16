import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/article">Articles</Link>
                <Link to="/project">Projets</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        );
    }
}

export default Navigation;