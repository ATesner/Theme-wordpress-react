import React, { Component } from 'react';
import http from '../helper';
import ReCAPTCHA from 'react-recaptcha';

class Contact extends Component {

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
    
    componentDidMount(){
        jQuery(".nav li").removeClass("active"); 
        jQuery('#contactLink').addClass('active');
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if(this.formValid()){
           this.resetRecaptcha();
           http.sendMessage({ 
               name: this.state.name,
               message: this.state.message
            }).then(response =>{                
                jQuery('#comment-form-success').removeClass('hidden');
            })
            this.setState({ disabled: 'disabled', name: '', message: '' })
        }else{
            console.log('form non valide')
        }
    }

    formValid() {
        return this.state.message.trim().length > 0 
            && this.state.name.trim().length > 0 
            && this.state.recaptcha_response.length > 0      
    }

    verifyCallback(response) {
     
        if(response.length > 0) {
            this.setState({ recaptcha_response: response, disabled: '' }) 
        }
    }

    resetRecaptcha() {
        recaptchaInstance.reset();  
    }

    render() {
        return (
            <div className="page-container contact-container">
            <p>
                
            </p>
            <h3>Me contacter </h3>
            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="alert alert-success alert-dismissable hidden" id="comment-form-success">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Message envoyé !</strong>
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
                <button ref="submitButton" type="submit" disabled={this.state.disabled}
                    className="btn btn-primary" >Envoyer</button>
            </form>
            </div>
        );
    }
}

export default Contact;