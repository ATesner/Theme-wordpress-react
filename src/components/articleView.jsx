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

    componentDidMount(){
        jQuery(".nav li").removeClass("active"); 
    }

    render() {

        return (
            <div className="article-view-container">
                { this.state.post != null ?
                <div dangerouslySetInnerHTML={{ __html: this.state.post.content.rendered }} /> 
                :
                <div>Chargement de l'article</div>
                }
            </div>
        );
    }
}

export default ArticleView;