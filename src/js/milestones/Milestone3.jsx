import React, { Component } from 'react';
import question1form1 from"../../res/question1form1.jpg"
import question2form1 from"../../res/question2form1.jpg"
import question3form1 from"../../res/question3form1.jpg"
import question4form1 from"../../res/question4form1.jpg"
import question1form2 from"../../res/question1form2.jpg"
import question2form2 from"../../res/question2form2.jpg"
import question3form2 from"../../res/question3form2.jpg"
import question4form2 from"../../res/question4form2.jpg"
import question5form2 from"../../res/question5form2.jpg"

import '../../css/Milestones.css'

import logInAdministrator from "../mocks/logInAdmin.png";
import logInWaiter from "../mocks/logInWaiter.png";
import waiter from "../mocks/waiter.png";
import administator from "../mocks/administator.png";
import home from "../mocks/home.png";

export default class Milestone3 extends Component {
  render() {
    return (
        <div className="milestone-container">
            <h1 className="w3-center" style = {{fontSize: '22px', color: '#184524'}}>Wireframes</h1><br />
            <h4>Home window</h4>
            <p className="w3-text-grey" >Each time the application is opened, a home window will be displayed. From home window the user can log in into the application as an administator or as a waiter. This home window is presented in the wireframe below.</p><br />
            <div className="image-container" style={{display: 'flex'}}>
                <img src={home} className="w3-round w3-image w3-opacity-min" width={500} height={550} style={{margin: '10px',float: 'center'}} />
            </div>

            <h4>Log In windows</h4>
            <p className="w3-text-grey" >Based on user role within the restaurant he can chose to log in either as an administator either as a waiter. As for the design, the two log in windows are similar, but they lead to different features of the application. Below you can see the wireframes of the two log in windows.</p><br />
            <div className="image-container" style={{float: 'center'}}>
                <img src={logInAdministrator} className="w3-round w3-image w3-opacity-min" width={300} height={330} style={{margin: '10px',float: 'center'}} />
                <img src={logInWaiter} className="w3-round w3-image w3-opacity-min" width={300} height={330} style={{margin: '10px',float: 'center'}} />
            </div>

            <h4>Main administator window</h4>
            <p className="w3-text-grey" >If the user chose to log in as an administator, the main administator window that can be seen in the wireframe below will be presented. In the left side of the window there is a menu that present five options to the user: Staff, Users, Stocks, Menu, Statistics. Each of these categories presents to the user different specific management features briefly described in the wireframe below.</p><br />
            <div className="image-container" style={{display: 'flex'}}>
                <img src={administator} className="w3-round w3-image w3-opacity-min" width={700} height={770} style={{margin: '10px',float: 'center'}} />
            </div>

            <h4>Main waiter window</h4>
            <p className="w3-text-grey" >If the user chose to log in as a waiter, the main waiter window that can be seen in the wireframe below will be presented. In the left side of the window there is a menu that present four options to the user: Tables, Orders, Menu, Customer loailty. Each of these categories presents to the waiter different specific features briefly described in the wireframe below.</p><br />
            <div className="image-container" style={{display: 'flex'}}>
                <img src={waiter} className="w3-round w3-image w3-opacity-min" width={700} height={770} style={{margin: '10px',float: 'center'}} />
            </div>

        </div>
    );
  }
}
