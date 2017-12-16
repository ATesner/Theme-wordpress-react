import React, { Component } from 'react';
import http from '../helper';

class Project extends Component {

    componentWillMount() {

        http.getPostsByCategory('projet').then(projets => {
            console.log('PROJETS', projets)
        })
    }

    render() {
        return (
            <div>
                Projets !
            </div>
        );
    }
}

export default Project;