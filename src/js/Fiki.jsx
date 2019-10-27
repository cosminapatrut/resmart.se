import React, { Component } from 'react';
import {Router as BrowserRouter, Route, Link} from 'react-router-dom'

import '../App.css';
import App from '../App';
import Milestone3 from './milestones/Milestone3';

class Fiki extends Component {

    constructor () {
        super();

        this.state = {
            enlargeImage: false,
            selectedImage: null,
            selectedMilestone: 1
        }
    }

    render() {

        return (
            <div className="app-container">
                    <App/>
            </div>
            
        );
    }
}

export default Fiki;
