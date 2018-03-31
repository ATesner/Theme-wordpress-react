import React, { Component } from 'react';
import Grid from './grid';
import http from '../helper';

class Article extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            articles: []
        }
    }
    
    componentWillMount() {

        http.getPostsByCategory('article').then(articles => {
            console.log('Articles:', articles)
            this.setState({ articles })
        })
    }

    componentDidMount(){
        jQuery(".nav li").removeClass("active"); 
        jQuery('#articleLink').addClass('active');
    }

    render() {
        return (
            <div className="page-container">
                <h1 className="page-title"> {this.state.articles.length} Articles</h1>
                <br/>
                <Grid posts={this.state.articles} />
            </div>
        );
    }
}

export default Article;