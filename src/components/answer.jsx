import React, { Component } from 'react';
import Moment from 'moment';
import CommentForm from './comment-form';

class Answer extends Component {
    render() {

        const { commentParentId } = this.props;

        if(this.props.answers && this.props.answers.find(answer => answer.parent == commentParentId)){
            return (    
                <div className="answer-container">
                    <a className="" data-toggle="collapse" href={ "#collapseAnswer" + commentParentId } 
                        role="button" aria-expanded="false" aria-controls={ "collapseAnswer" + commentParentId }>
                        Afficher les réponses
                    </a>
                    <div className="collapse" id={ "collapseAnswer" + commentParentId }>
                        { <div>
                        <ul className="answer-list list-group">
                            {
                                this.props.answers && this.props.answers.map((answer, index) => {
                                    if(commentParentId == answer.parent){
                                        return (
                                            <li key={index} className="answer-item list-group-item">
                                                <small className="pull-right">
                                                    ajouté le { Moment(answer.date).format('DD-MM-YYYY HH:mm') }
                                                </small>
                                                <h4>{answer.author_name}</h4>
                                                <div dangerouslySetInnerHTML={{ __html: answer.content.rendered }} />
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                        <button type="button" className="btn btn-primary" onClick={() => {this.props.showHideModal(commentParentId)}}>
                            Répondre
                        </button>
                        </div>
                        }
                    </div>
                </div>
            );
        }
        else return null
    }
}

export default Answer;