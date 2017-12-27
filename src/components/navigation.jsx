import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//https://getbootstrap.com/docs/3.3/components/#navbar
class Navigation extends Component {
    render() {
        return (
        <nav className="navbar navbar-inverse bg-inverse">
        <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Navbar</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Accueil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/article">Articles</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/project">Projets</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
            <form className="navbar-form navbar-left">
                <input className="form-control mr-sm-2" type="text" placeholder="Rechercher" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
            </form>
        </div>
        </nav>
        );
    }
}

export default Navigation;