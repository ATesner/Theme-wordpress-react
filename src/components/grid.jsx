import React, { Component } from 'react';
import http from '../helper';
import Moment from 'moment';
import { Link } from 'react-router-dom'

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

    render() {
        return (
            <div className="grid">
                { this.props.posts.length > 0 && this.state.categories.length > 0 ?
                    this.props.posts.map((post, index) => {
                        if(!post.content.protected) {
                            return (   
                                <div key={index} className="grid-item" > 
                                <Link to={'/'+post.slug}>     
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
                                </Link>
                                </div>
                            )
                        }
                    })
                :
                <div className="loader"></div>
                }
            </div>
        );
    }
}

export default Grid;