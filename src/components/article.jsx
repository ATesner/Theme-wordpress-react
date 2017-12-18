import React, { Component } from 'react';
import http from '../helper';
require( '../scss/style.scss');

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

    render() {
        return (
            <div>
                {
                    this.state.articles.map((article, index) => {
                        return (
                            <div key={index}><p>{ article.title.rendered}</p></div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Article;