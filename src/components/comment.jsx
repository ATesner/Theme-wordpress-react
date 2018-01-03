import React, { Component } from 'react';
import http from '../helper';

class Comment extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            message: ''
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
        console.log('submit !', this.state.name, this.state.message)
        http.postComment({ 
            author_name: this.state.name,
            content: this.state.message,
            post: this.props.postId
        }).then(response =>{
            console.log('Retour message',response)
        })
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                <label>Nom :</label>
                <input type="text" name="author_name" maxLength="25" className="form-control" 
                    value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                <label>Message:</label>
                <textarea type="text" name="content" maxLength="500" className="form-control"
                    value={this.state.message} onChange={this.handleMessageChange.bind(this)} ></textarea>
                <br/>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
        );
    }
}

export default Comment;