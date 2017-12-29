import React, { Component } from 'react';
import Grid from './grid';
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
            <div className="page-container">
                <Grid posts={this.state.projets} />
            </div>
        );
    }
}

export default Project;