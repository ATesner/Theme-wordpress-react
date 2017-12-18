import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <nav className="text-center navbar navbar-default">
                <Link className="active" to="/">Accueil</Link>
                <Link className="" to="/article">Articles</Link>
                <Link className="" to="/project">Projets</Link>
                <Link className="" to="/contact">Contact</Link>
            </nav>
        );
    }
}

export default Navigation;