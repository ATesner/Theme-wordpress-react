import React, { Component } from 'react';

class Grid extends Component {

    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="grid">
                { this.props.posts ?
                    this.props.posts.map((post, index) => {
                        if(!post.content.protected) {
                            return (        
                                <div key={index} className="item" > 
                                <a href={"#/article/" + post.id} >
                                    { post.better_featured_image ? 
                                        <img className="img-item" src={post.better_featured_image.source_url} /> : null
                                    }
                                    
                                    <h4 className="title-item" >{ post.title.rendered }</h4>
                                    <div className="text-item" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} /> 
                                    </a>
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