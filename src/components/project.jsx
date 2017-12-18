import React, { Component } from 'react';
import http from '../helper';

class Project extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            projets: []
        }
    }
    

    componentWillMount() {

        http.getPostsByCategory('projet').then(projets => {
            console.log('PROJETS', projets)
            this.setState({ projets })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.projets.map((projet, index) => {
                        return (
                            <div key={index}>{projet.title.rendered}</div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Project;