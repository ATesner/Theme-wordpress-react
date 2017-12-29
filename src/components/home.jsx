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
    }

    render() { 
        
        return (
            <div className="home-container">
                <div className="home-spitch">
                    <p>Un Spitch ?</p>
                </div>
                <div className="home-last-article">
                    <h1>Derniers posts</h1>
                    <br/>
                    <Grid posts={this.state.lastPosts} />
                </div>
            </div>
        );
    }
}

export default Home;