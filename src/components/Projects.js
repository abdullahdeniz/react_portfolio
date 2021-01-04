import React from 'react';
import { Router } from 'react-router-dom'

class Projects extends React.Component{
    render (){
        return(
            <Router>
                <div>   
                    <p>Les Cours </p>
                    <p>Les Formations</p>
                    <p>Les Voyages</p>
                </div>
            </Router>
        )
        
    }
};


export default Projects;