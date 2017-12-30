import React, { Component } from 'react';
import http from '../helper';
import Grid from './grid';
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            lastPosts: []
        }
    }
    
    componentWillMount() {
      
        http.getAllPosts().then((posts) => {
            this.setState({ lastPosts: posts })
            console.log('Posts Home', posts)
        });
    }

    componentDidMount(){
        jQuery(".nav li").removeClass("active"); 
        jQuery('#homeLink').addClass('active');

        var images = [
        'https://images.unsplash.com/photo-1448906654166-444d494666b3?auto=format&fit=crop&w=1500&q=80', 
        'https://images.unsplash.com/photo-1507139831800-3285c47534dd?auto=format&fit=crop&w=952&q=80',
        'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1497030855747-0fc424f89a4b?auto=format&fit=crop&w=750&q=80'];
        let nb = Math.floor(Math.random() * images.length);
        console.log('NB', nb)
        $('.home-container').css({'background-image': 'url(' + images[nb] + ')'});
    }

    handleScroll() {
        $('html, body').animate({
            scrollTop: (jQuery("#lastPosts").offset().top - 35)
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
                </div>
            </div>
        );
    }
}

export default Home;