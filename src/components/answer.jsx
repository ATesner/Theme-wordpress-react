import React, { Component } from 'react';
import Moment from 'moment';
import CommentForm from './comment-form';

class Answer extends Component {
    render() {
        if(this.props.answers && this.props.answers.find(answer => answer.parent == this.props.parent)){
            return (    
                <div className="answer-container">
                    <a className="" data-toggle="collapse" href={ "#collapseAnswer" + this.props.parent } 
                        role="button" aria-expanded="false" aria-controls={ "collapseAnswer" + this.props.parent }>
                        Afficher les réponses
                    </a>
                    <div className="collapse" id={ "collapseAnswer" + this.props.parent }>
                        {
                        <ul className="answer-list list-group">
                            {
                                this.props.answers && this.props.answers.map((answer, index) => {
                                    if(this.props.parent == answer.parent){
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
                        }
                    </div>
                </div>
            );
        }
        else return null
    }
}

export default Answer;