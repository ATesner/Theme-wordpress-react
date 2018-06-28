import React, { Component } from 'react';
import http from '../helper';
import CommentForm from './comment-form';
import Comment from './comment';
import MyModal from './my-modal';
import Moment from 'moment';
import { Link } from 'react-router-dom';

class ArticleView extends Component {

    constructor(props) {
        super(props);
        
        this.state =  {
            post: null,
            commentId: 0,
            retourLink: 'article'
        }
        this.showHideModal = this.showHideModal.bind(this);
    }
    
    componentWillMount() {

        http.getPost(this.props.match.params.slug).then(post => {
            console.log('ArticleView', post)
            this.setState({ post: post[0], retourLink: post[0].categories[0] == 7 ? 'article' : 'project' })
            jQuery('.article-view-banner').css({'background-image': 'url(' + post[0].better_featured_image.source_url + ')'});
        })
    }

    componentDidMount(){
        jQuery(".nav li").removeClass("active");      
    }

    componentDidUpdate() {
        Prism.highlightAll();
        this.state.post && jQuery("title").text(this.state.post.title.rendered);
    }

    showHideModal(id) {
        this.setState({ commentId: id }, () => { 
            this.state.commentId == 0 ?
            jQuery('#myModal').modal('hide')
            :
            jQuery('#myModal').modal('show') 
        })
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
                    <Link className="retour-link" to={'/'+this.state.retourLink}>
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> 
                        Retour aux { this.state.retourLink == 'project' ? 'projets' : 'articles'}
                    </Link>
                    <span className="date-app pull-right"> publié le { Moment(this.state.post.date).format('DD-MM-YYYY') }</span>
                    <br/>
                    <div className="article-view-content" dangerouslySetInnerHTML={{ __html: this.state.post.content.rendered }} /> 
                    <hr/>
                    <h3>Ajouter un commentaire: </h3>
                    { this.state.commentId == 0 ?
                        <CommentForm postId={this.state.post.id} parent={ 0 }/>
                    :
                        <MyModal showHideModal={this.showHideModal} title='Répondre'>
                             <CommentForm postId={this.state.post.id} parent={ this.state.commentId }/>
                        </MyModal>
                    }
                    <br/>
                    <Comment postId={this.state.post.id} showHideModal={this.showHideModal}/>
                </div>
                :
                <div className="loader"></div>
                }
            </div>
        );
    }
}

export default ArticleView;