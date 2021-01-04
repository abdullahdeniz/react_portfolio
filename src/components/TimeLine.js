import React from 'react'
import { Router } from 'react-router-dom';




class Timeline extends React.Component{
    render (){
        return(
            <Router>
                <div>   
                    <ul>
                        <li>
                            Albania
                        </li>
                        <li>
                            Chad
                        </li>
                        <li>
                            Togo
                        </li>
                        <li>
                            France
                        </li>
                    </ul>
                </div>
            </Router>
        )
        
    }
};


export default Timeline;