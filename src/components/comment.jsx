import React, { Component } from 'react';
import http from '../helper';
import Moment from 'moment';

class Comment extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            offset: 0,
            per_page: 5,
            comments: []
        }
    }
    
    componentWillMount() {

        http.getComment(this.props.postId, this.state.offset, this.state.per_page).then(comments => {
            console.log('Comments', comments)
            this.setState({ comments })
        })
    }

    render() {
        return (
            <div className="comment-container">
                {
                    this.state.comments.length > 0 ?
                    <ul className="comment-list list-group">
                        {
                            this.state.comments.map((comment, index) => {
                                return (
                                    <li key={index} className="comment-item list-group-item">
                                        <small className="pull-right">
                                            ajouté le { Moment(comment.date_gmt).format('DD-MM-YYYY') }
                                        </small>
                                        <h4>{comment.author_name}</h4>
                                        <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                    :
                    <div>Chargement des commentaires</div>
                }
            </div>
        );
    }
}

export default Comment;