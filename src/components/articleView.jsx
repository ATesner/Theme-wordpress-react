import React, { Component } from 'react';
import http from '../helper';

class ArticleView extends Component {

    constructor(props) {
        super(props);
        
        this.state =  {
            post: null
        }
    }
    
    componentWillMount() {

        http.getPost(this.props.match.params.id).then(post => {
            console.log('ArticleView', post)
            this.setState({ post })
        })
    }

    render() {

        if(this.state.post != null){

            return (
                <div className="article-view-container">
                   <div dangerouslySetInnerHTML={{ __html: this.state.post.content.rendered }} /> 
                </div>
            );
        }else{
            return (
                <div>Chargement de l'article</div>
            )
        }
    }
}

export default ArticleView;