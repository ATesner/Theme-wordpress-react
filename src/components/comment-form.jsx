import React, { Component } from 'react';
import http from '../helper';
import ReCAPTCHA from 'react-recaptcha';

var recaptchaInstance;

class CommentForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            message: '',
            disabled: 'disabled'
        }
    }
    
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleMessageChange(e) {
        this.setState({message: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if(this.formValid()){
           this.resetRecaptcha();
           http.postComment({ 
               author_name: this.state.name,
               content: this.state.message,
               post: this.props.postId,
               parent: this.props.parent
            }).then(response =>{
                console.log('Retour message',response)
                this.setState({ disabled: '' })
                jQuery('#comment-form-success').removeClass('hidden');
            })
            this.setState({ disabled: 'disabled', name: '', message: '' })
        }else{
            console.log('form non valide')
        }
    }

    verifyCallback(response) {
        if(response.length > 0) {
            this.setState({ recaptcha_response: response, disabled: '' }) 
        }
    }

    resetRecaptcha() {
        recaptchaInstance.reset();  
    }

    formValid() {
        return this.state.message.trim().length > 0 
            && this.state.name.trim().length > 0 
            && this.state.recaptcha_response.length > 0
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="alert alert-success alert-dismissable hidden" id="comment-form-success">
                <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Commentaire envoyé !</strong> Il sera visible après avoir été approuvé.
            </div>
                <label>Nom* :</label>
                <input type="text" name="author_name" maxLength="25" className="form-control" 
                    value={this.state.name} onChange={this.handleNameChange.bind(this)} required/>
                <label>Message* :</label>
                <textarea type="text" name="content" maxLength="500" className="form-control"
                    value={this.state.message} onChange={this.handleMessageChange.bind(this)} required></textarea>
                <br/>
                <ReCAPTCHA ref={e => recaptchaInstance = e} sitekey="6LeWNj8UAAAAAGTm5gLoaYTREoxAsNmW1t2w63kR" 
                    verifyCallback={this.verifyCallback.bind(this)} />
                <br/>
                <button ref="submitButton" type="submit" 
                    className="btn btn-primary" disabled={this.state.disabled}>Envoyer</button>
            </form>
        );
    }
}

export default CommentForm;