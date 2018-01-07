import React, { Component } from 'react';
import http from '../helper';
import Moment from 'moment';
import Answer from './answer';

class Comment extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            offset: 0,
            per_page: 5,
            comments: [],
            answers: [],
            //commentsLoaded: false,
            loadingComments: false
        }

        this.scrollFunction = this.viewDidScroll.bind(this);
    }
    
    componentWillMount() {

        window.removeEventListener('scroll', this.scrollFunction);
        this.loadComments()
    }
    componentDidMount(){
        window.addEventListener('scroll', this.scrollFunction);
    }
    loadComments() {

        http.getComment(this.props.postId, this.state.offset, this.state.per_page, 0).then(newComments => {
            let commentsId = []
            newComments.forEach((comment, index) => {
                commentsId.push(comment.id)
            })
            http.getAnswer(commentsId).then(newAnswers => {
                console.log('Comments', newComments, newAnswers)

                this.setState({ 
                    comments: this.state.comments.concat(newComments), 
                    answers: this.state.answers.concat(newAnswers),
                   // commentsLoaded: true,
                    offset: this.state.offset + this.state.per_page,
                    loadingComments: false
                })
            })
            if(newComments.length < this.state.per_page){
                window.removeEventListener('scroll', this.scrollFunction);
            }
        })
    }

    viewDidScroll() {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50) && !this.state.loadingComments) {
            this.setState({ loadingComments: true });
            this.loadComments();
        }
    }

    render() {
        return (
            <div className="comment-container">
                {
                    <ul className="comment-list list-group">
                        {
                            this.state.comments.map((comment, index) => {
                                return (
                                    <li key={index} className="comment-item list-group-item">
                                        <small className="pull-right">
                                            ajouté le { Moment(comment.date).format('DD-MM-YYYY HH:mm') }
                                        </small>
                                        <h4>{comment.author_name}</h4>
                                        <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />
                                        <Answer answers={this.state.answers} parent={comment.id} />
                                    </li>
                                )
                            })
                        }
                        <br/>
                        { this.state.loadingComments ? <div className="loader"></div> : null }
                    </ul>

                }
            </div>
        );
    }
}

export default Comment;