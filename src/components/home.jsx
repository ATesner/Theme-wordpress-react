import React, { Component } from 'react';
import http from '../helper';
import Grid from './grid';
import { Link } from 'react-router-dom'

class Home extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            lastPosts: []
        }
    }
    
    componentWillMount() {
      
        http.getLastPosts().then((posts) => {
            this.setState({ lastPosts: posts })
            //console.log('Posts Home', posts)
        });
    }

    componentDidMount(){
        jQuery(".nav li").removeClass("active"); 
        jQuery('#homeLink').addClass('active');

        var images = [ 'http://antoinetesner.fr/wp-content/uploads/2018/06/bibliotech_banner.jpg'];
        let nb = Math.floor(Math.random() * images.length);
        jQuery('.home-container').css({'background-image': 'url(' + images[nb] + ')'});
    }

    handleScroll() {
        jQuery('html, body').animate({
            scrollTop: (jQuery("#lastPosts").offset().top - 55)
        }, 700);
    } 

    render() { 

        return (
            <div className="home-container">
                <div className="home-img">
                    <div className="home-spitch" onClick={this.handleScroll.bind(this)}>
                        <p>Apprenez de nouvelles choses</p>
                        <span className="glyphicon glyphicon-chevron-down"></span>
                    </div>
                </div>
            
                <div className="home-last-article" id="lastPosts">
                    <h1 className="home-last-title">Dernieres publications</h1>
                    <br/>
                    <Grid posts={this.state.lastPosts} />
                    <span className="next-icon glyphicon glyphicon-option-horizontal" aria-hidden="true"></span>
                    <div className="home-options">               
                        <Link to="/article">
                            <button className="btn btn-secondary btn-lg">
                                <i className="fas fa-book"></i> Voir les articles
                            </button>
                        </Link>
                        
                        <Link to="/project">
                            <button className="btn btn-secondary btn-lg">
                            <i className="glyphicon glyphicon-wrench"></i> Voir les projets
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;