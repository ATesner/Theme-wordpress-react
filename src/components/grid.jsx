import React, { Component } from 'react';
import http from '../helper';
import Moment from 'moment';

class Grid extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            categories: []
        }
    }
    
    componentWillMount() {

        http.getAllCategories().then(categories => {
            this.setState({ categories })
        })
    }

    handleItemClick(postId) {
        window.location = '#/article/'+ postId;
    }

    render() {
        return (
            <div className="grid">
                { this.props.posts.length > 0 && this.state.categories.length > 0 ?
                    this.props.posts.map((post, index) => {
                        if(!post.content.protected) {
                            return (        
                                <div key={index} className="item" onClick={this.handleItemClick.bind(this, post.id)} > 
                                    { post.better_featured_image ? 
                                        <img className="img-item" src={post.better_featured_image.source_url} /> : null
                                    }
                                    <h4 className="title-item" >{ post.title.rendered }</h4>
                                    <div className="infos-item">
                                        <span className="cat-item">
                                            {this.state.categories.find(cat => cat.id == post.categories[0]).name }
                                        </span>
                                        <span className="date-item"> publié le { Moment(post.date).format('DD-MM-YYYY') }</span>
                                    </div>
                                    <div className="text-item" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} /> 
                                </div>
                            )
                        }
                    })
                :
                <div className="loader">Chargement...</div>
                }
            </div>
        );
    }
}

export default Grid;