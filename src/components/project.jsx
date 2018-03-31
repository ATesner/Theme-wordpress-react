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

    componentDidMount(){
        jQuery(".nav li").removeClass("active"); 
        jQuery('#projectLink').addClass('active');
    }

    render() {
        return (
            <div className="page-container">
                <h1 className="page-title"> {this.state.projets.length} Projets</h1>
                <br/>
                <Grid posts={this.state.projets} />
            </div>
        );
    }
}

export default Project;