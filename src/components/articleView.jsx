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
            jQuery('.article-view-banner').css({'background-image': 'url(' + post.better_featured_image.source_url + ')'});
        })
    }

    componentDidMount(){
        jQuery(".nav li").removeClass("active"); 
    }

    render() {

        return (
            <div className="article-view-container">
            { this.state.post != null ? 
                <div className="article-view-page">
                <div className="article-view-banner">
                    <div className="overlay">
                        <h3>{this.state.post.title.rendered}</h3>
                    </div>
                </div>
                    <div dangerouslySetInnerHTML={{ __html: this.state.post.content.rendered }} /> 
                </div>
                :
                <div>Chargement de l'article</div>
                }
            </div>
        );
    }
}

export default ArticleView;