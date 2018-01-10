import React, { Component } from 'react';
import http from '../helper';
import CommentForm from './comment-form';
import Comment from './comment';
import MyModal from './my-modal';

class ArticleView extends Component {

    constructor(props) {
        super(props);
        
        this.state =  {
            post: null,
            commentId: 0
        }
        this.showHideModal = this.showHideModal.bind(this);
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

    componentDidUpdate() {
        Prism.highlightAll();
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