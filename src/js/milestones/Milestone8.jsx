import React, { Component } from "react";

import "../../css/Milestones.css";

import feedbackQ6 from "../../res/feedbackQ6.PNG"
import feedbackQ5 from "../../res/feedbackQ5.PNG"


export default class Milestone8 extends Component {
        render() {
                return (
                    <div className="milestone-container">
                    <h1
                     className="w3-center"
                     style={{ fontSize: "22px", color: "#184524" }}
                   >
                     First Sale
                   </h1>
                   <br />
                   <div>

                   <p className="w3-text-grey">
                   After we developed a functional prototype that includes basic functionalities for the management of a restaurant, we tried to distribute it to restaurant employees. Of those we contacted, only 6 were willing to test our prototype. We encouraged them to provide feedback as honestly as possible so that we can make an impression about what improvements or changes are needed.
                   </p>
                   <p className="w3-text-grey">
	               To test the application, since this is a desktop application, we organized a 15-minute session with each of the people who wanted to test the application and we provided them with a machine that allowed them to test the prototype without us intervening and without affecting in any way how they use the application.
                   </p>
                   </div>
                <div>
                   <h4>Feedback method</h4>
                   <p className="w3-text-grey">
                   At the end of the testing session we offered a form to complete in order to get feedback from them(you can see the form <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQEzYvoGqqj26cFaqJjRCQnUVk0bpZiGnloqWOP94Z5bhIwg/viewform" >here</a>).
                   </p>
                   <p className="w3-text-grey">
                   These are the questions we included in the form:
                   </p>
                   <ul className="w3-text-grey">
                    <li>How much did you like the ResMart application?</li>
                    <li>What did you particularly like about our application?</li>
                    <li>What didn't you like about our application?</li>
                    <li>What improvements would you like to see in this application?</li>
                    <li>How intuitive is the application?</li>
                    <li>Do you think such an application would be useful at the restaurant you work?</li>
                    </ul>
                   
                 </div>

                 <div>
                   <h4>Feedback results</h4>
                   <p className="w3-text-grey">
                   Even if we managed to get feedback from only 6 people, a number of results start to form.<br />
                   We note that 83.3% consider that such an application would help their restaurant and all interviewees consider that the application is intuitive (66.7%) or very intuitive (33.3%). These are good results, but it is obvious that there is room for improvement in the process.
                   </p>
                   
                   <div className="screenshots-container"
                    style={{
                        textAlign: "center",
                        marginTop: "30px",
                        marginBottom: "30px"

                    }}
                    >
                    <img style={{ height: "300px", width: "550px", marginRight: "30px" }} src={feedbackQ6} alt="" />
                    <img style={{ height: "300px", width: "550px" }} src={feedbackQ5} alt="" />
                    </div>

                    <p className="w3-text-grey">
                    We analyzed all the answers and we managed to extract positive and negative feedback:
                   </p>

                 <ul className="w3-text-grey">
                    <li>Positive feedback
                        <ul>
                        <li>The way in which the management of employees and staff is done.</li>
                        <li>The way the tables with the associated orders are presented. It is easy to use.</li>
                        <li>Clear delimitation of the attributions of the administrator and those of the waiter.</li>
                        </ul>
                    </li>
                    <li>Negative feedback
                        <ul>
                        <li>The fact that you are not warned when you add a product to the menu without having all the ingredients available.</li>
                        <li>You cannot search for employees in the database.</li>
                        <li>Can't add notes to orders.</li>
                        </ul>
                    </li>
                 </ul>

                 <p className="w3-text-grey">
                 We also asked the interviewees for improvements suggestions and their responses can be seen below: 
                   </p>

                   <ul className="w3-text-grey">
                    <li>Allow adding notes to each order. With customer preferences for example.</li>
                    <li>Allow searching by orders, employees, etc.</li>
                    <li>To create separate payment notes</li>
                    <li>Allow the waiter to create custom products at the client's request</li>
                    </ul>
                   
                 </div>
           
                 <p className="w3-text-grey">
                 All the responses can be checked <a href="https://docs.google.com/spreadsheets/d/1JufwOd0NozDVjYHTSp_K9qMYas9E0kDisJgrROrHJ_Q/edit#gid=1438118391" >here</a>. 
                   </p>

                   <p className="w3-text-grey">
                   All this feedback we received helps us to better understand the clients' requirements and to improve our application in order to create a useful and competitive product.
                   </p>
           </div>
                )
        }
}
