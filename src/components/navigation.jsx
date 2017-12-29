import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//https://getbootstrap.com/docs/3.3/components/#navbar
class Navigation extends Component {
    render() {
        return (
        <nav className="navbar navbar-inverse bg-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
            <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img src="http://antoinetesner.fr/wp-content/uploads/2017/12/Logo_blog.png" /></a>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/article">Articles</Link>
                    </li>
                    <li>
                        <Link to="/project">Projets</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                {/* <form className="navbar-form navbar-right">
                    <input className="form-control mr-sm-2" type="text" placeholder="Rechercher" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
                </form> */}
            </div>
        </div>
        </nav>
        );
    }
}

export default Navigation;