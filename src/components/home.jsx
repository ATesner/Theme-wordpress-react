import React, { Component } from 'react';
import http from '../helper';
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

    render() { 
        
        return (
            <div className="home-container">
                <h1>Derniers articles</h1>
                { 
                    this.state.lastPosts.map((post, index) => {
                        //console.log(post)
                        if(!post.content.protected) {
                            return (        
                                <div key={index} className="article-box" > 
                                    { post.better_featured_image ? 
                                        <img src={post.better_featured_image.source_url} /> : null
                                    }
                                    {/* <h4>{ post.title.rendered }</h4> */}
                                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} /> 
                                </div>
                            )
                        }
                    })
                }
            </div>
        );
    }
}

export default Home;