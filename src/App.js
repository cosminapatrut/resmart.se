import React, { Component } from "react";
import { Route, Switch, Router as BrowserRouter, Link } from "react-router-dom";
// import Fiki from "./js/Fiki";

import { createBrowserHistory } from "history";

//Import images
import HeaderImg from "./res/resmart.jpg"
import aboutSectionImg from "./res/aboutSectionImg.jpg"
import CosminaAvatar from "./res/cosmina.jpg";
import AlexAvatar from "./res/alex.jpg";
import TabPanel from "./js/Milestones.jsx"
import Milestones from "./js/Milestones.jsx";

const customHistory = createBrowserHistory();


// export default App;
class App extends Component{
  render() {
    return (
      <div>
        <title>Resmart Template</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <style dangerouslySetInnerHTML={{__html: "\nbody {font-family: \"Times New Roman\", Georgia, Serif;}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Playfair Display\";\n  letter-spacing: 5px;\n}\n\n.team-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.team-member-container {\n  width: calc(100% - 20px); \n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.team-member-container > img{\n  width:300px;\n  height:300px;\n  border-radius: 100%;\n  flex-direction: column\n}\n\n.team-member-container h3{\n  font-weight: bold;\n  color: #000;\n}\n\n.team-member-container h4{\n  color: #656f80;\n}\n\n" }} />
        {/* Navbar (sit on top) */}
        <div className="w3-top">
          <div className="w3-bar w3-white w3-padding w3-card" style={{letterSpacing: '4px'}}>
            <a href="#home" className="w3-bar-item w3-button">ResMart</a>
            {/* Right-sided navbar links. Hide them on small screens */}
            <div className="w3-right w3-hide-small">
              <a href="#about" className="w3-bar-item w3-button">About</a>
              <a href="#milestones" className="w3-bar-item w3-button">Milestones</a>
              <a href="#team" className="w3-bar-item w3-button">Meet Our Team</a>
              <a href="#contact" className="w3-bar-item w3-button">Contact</a>
            </div>
          </div>
        </div>
        {/* Header */}
        <header className="w3-display-container w3-content w3-wide" style={{maxWidth: '1600px', minWidth: '500px'}} id="home">
          <img className="w3-image" src={HeaderImg} width={1600} height={1600} />
          <div className="w3-display-bottomright w3-padding-large w3-opacity">
            <h1 className="w3-text-grey-blue w3-xxlarge">ResMart</h1>
          </div>
        </header>
        {/* Page content */}
        <div className="w3-content" style={{maxWidth: '1500px'}}>
          {/* About Section */}
          <div className="w3-row w3-padding-64" id="about">
            <div className="w3-col m6 w3-padding-large w3-hide-small">
              <img src={aboutSectionImg} className="w3-round w3-image w3-opacity-min" width={600} height={750} />
            </div>
            <div className="w3-col m6 w3-padding-large">
              <h1 className="w3-center">About ResMart</h1><br />
              <h5 className="w3-center">Introduction</h5>
              <p className="w3-large"> The implementation of a software application for optimizi
                ng the activity within a restaurant aims to offer solutions as simple and practical as 
                available to any user and to help increase the efficiency of the company that adopts it. I
                t also helps in making optimal, fundamental and operational decisions, managing a large v
                olume of data, reducing the workload of employees, digitizing information and facilitating
                access to them at any time. At the same time, such a computer solution is perfectly suited 
                to the profile of any restaurant, facilitating the interactions both between the company an
                d its employees, as well as those between staff and customers, partners or suppliers.
              </p></div>
          </div>
          <hr />
          {/* More Details Section */}
          <div className="w3-row w3-padding-64" id="milestones">
          <Milestones />
          </div>
          <hr />
          {/* Team Section */}
          <div className="w3-container w3-padding-64 team-container" id="team">
            <div className="team-member-container">
              <img src={AlexAvatar} alt="MemberPhoto" />
              <div className="w3-container w3-center">
                <h3>Alexandru Pondriche</h3>
                <h4>DBA Administrator</h4>
                <h4>Full Stack Developer</h4>
              </div>
            </div>
            <div className="team-member-container">
              <img src={CosminaAvatar} alt="MemberPhoto" />
              <div className="w3-container w3-center">
                <h3>Cosmina Patrut</h3>
                <h4>Project Manager</h4>
                <h4>Full Stack Developer</h4>
              </div>
            </div>
          </div>
          {/* End page content */}
          {/* Contact Section */}
          <div className="w3-container w3-padding-64" id="contact">
            <h1>Contact</h1><br />
            <p className="w3-text-blue-grey w3-large"><b>Bucharest, Romania</b></p>
            <p>You can contact us by phone or email:</p>
            <p className="w3-text-blue-grey w3-large"><b><a href="tel:+40744446607">+4 0744 446 607</a></b></p>
            <p className="w3-text-blue-grey w3-large"><b><a href="mailto:cosminamadalina.patrut@gmail.com">cosminamadalina.patrut@gmail.com</a></b></p>
            <p className="w3-text-blue-grey w3-large"><b><a href="mailto:alexandru.pondriche@gmail.com">alexandru.pondriche@gmail.com</a></b></p>
          </div>
          {/* End page content */}
        </div>
      </div>
    );
  }
}

export default App;