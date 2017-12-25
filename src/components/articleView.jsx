import React, { Component } from 'react';
import http from '../helper';

class ArticleView extends Component {

    componentWillMount() {

        http.getPost(this.props.match.params.id).then(post => {
            console.log('ArticleView', post)
        })
    }

    render() {
        console.log('VIEW')
        console.log('Props ArticleView', this.props)
        return (
            <div>
                
            </div>
        );
    }
}

export default ArticleView;