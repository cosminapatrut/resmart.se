import React, { Component } from "react";

import "../../css/Milestones.css";

import mainWindow from "../../res/Main.png"
import loginAdministrator from "../../res/loginAdministrator.PNG"
import loginOspatar from "../../res/loginOspatar.PNG"
import adminPersonal from "../../res/adminPersonal.PNG"
import adminUsers from "../../res/adminUsers.PNG"
import adminStocks from "../../res/adminStocks.PNG"
import adminMenu from "../../res/adminMenu.PNG"
import waiterMese from "../../res/waiterMese.PNG"
import waiterComenzi from "../../res/waiterComenzi.PNG"
import waiterMeniu from "../../res/waiterMeniu.PNG"
import appVideo from "../../res/appVideo.webm"

export default class Milestone7 extends Component {
        render() {
                return (
                    <div className="milestone-container">
                    <h1
                     className="w3-center"
                     style={{ fontSize: "22px", color: "#184524" }}
                   >
                     MVP: Minimum Viable Product
                   </h1>
                   <br />
                   <div>
                   <h4>Description of our MVP
           </h4>
                   <p className="w3-text-grey">
                   When implementing our solution we wanted the first version of the application to include  functionalities that we identified as being indispensable during the stage of idea validation.
                   </p>
                   <p className="w3-text-grey">
	               The main purpose of this prototype is to identify the degree of satisfaction of the users, how much the application helps them in their activity and if they would be willing to pay for the full version of the application. The prototype includes only basic functionalities that will be described below.
                   </p>
                   <p className="w3-text-grey">
                    The design of the application is a minimalist one, the emphasis being more on functionalities.
	                Our prototype, at the current stage, allows the user to log into the application from two perspectives: administrator or waiter.
                   </p>
                   <p className="w3-text-grey">
                   Regarding the use from the point of view of the restaurant manager, he can choose from the menu on the left of the window the category on which he wants 
                   to carry out actions. As can be seen from the feedback received in the previous stages (Milestone 2 - Validation), the essential areas to be covered in 
                   such an application, regarding the administrative perspective, are personnel management and stock management. These two options are present in our prototype.
	               Also, from the result of the survey we did, it came to light that from the perspective of the waiters the areas that could be improved are the
                    table management and the order management. These two functionalities can be found in the prototype.
                   </p>
                   <p className="w3-text-grey">
                     The <b>Main Window</b>, of our app is presented in the image bellow:
                    </p>
                    <div
                    style={{
                        textAlign: "center",
                        marginTop: "30px",
                        marginBottom: "30px"
                    }}
                    >
                    <img style={{ height: "300px", width: "450px"}} src={mainWindow} alt="" />
                    </div>

                    <p className="w3-text-grey">
                     The two <b>LogIn Windows</b> for Administrator and Waiter are presented below:
                    </p>

                    <div className="screenshots-container"
                    style={{
                        textAlign: "center",
                        marginTop: "30px",
                        marginBottom: "30px"

                    }}
                    >
                    <img style={{ height: "200px", width: "180px", marginRight: "30px" }} src={loginAdministrator} alt="" />
                    <img style={{ height: "200px", width: "180px" }} src={loginOspatar} alt="" />
                    </div>
                    
                   </div>
                  <div> 
                   <h4>Features that are available for <b>Administrator</b>
           </h4>
                   <p className="w3-text-grey">
                   Below are a series of images that describe the application interface to better understand the perspective offered to an administrator.
                   The Statistics menu has not been implemented within the prototype.
                   </p>
                   <p className="w3-text-grey">
                   <b>Personal</b> - The administrator can add, delete or update data about the restaurant employees.<br />
                   <b>Users</b> - Administrator can create user accounts for new employees
                   </p>

                   <div className="screenshots-container"
                    style={{
                        textAlign: "center",
                        marginTop: "30px",
                        marginBottom: "30px"

                    }}
                    >
                    <img style={{ height: "300px", width: "450px", marginRight: "30px" }} src={adminPersonal} alt="" />
                    <img style={{ height: "300px", width: "450px" }} src={adminUsers} alt="" />
                    </div>

                   <p className="w3-text-grey">
                   <b>Stocks</b> - The administrator can manage the food stocks of the restaurant and can set alarms when the quantity of a certain product reaches a low level.<br />
                   <b>Menu</b> - The administrator manages the restaurant menu by defining the product name, the ingredients, the price, etc.
                   </p>

                   <div className="screenshots-container"
                    style={{
                        textAlign: "center",
                        marginTop: "30px",
                        marginBottom: "30px"

                    }}
                    >
                    <img style={{ height: "300px", width: "450px", marginRight: "30px" }} src={adminStocks} alt="" />
                    <img style={{ height: "300px", width: "450px" }} src={adminMenu} alt="" />
                    </div>
                </div>
           <div>
           <h4>Features that are available for <b>Waiter</b>
           </h4>
           <p className="w3-text-grey">
                   Below are a series of images that describe the application interface to better understand the perspective offered to a waiter.
                   The Client fidelity menu has not been implemented within the prototype.
                   </p>
                   <p className="w3-text-grey">
                   <b>Tables</b> - The waiter can see the available tables and can start or close an order for any table. It also cand rearange the tables in order to ease their work.<br />
                   <b>Orders</b> - Waiter can see info about any active order or closed order.
                   </p>

                   <div className="screenshots-container"
                    style={{
                        textAlign: "center",
                        marginTop: "30px",
                        marginBottom: "30px"

                    }}
                    >
                    <img style={{ height: "300px", width: "450px", marginRight: "30px" }} src={waiterMese} alt="" />
                    <img style={{ height: "300px", width: "450px" }} src={waiterComenzi} alt="" />
                    </div>

                   <p className="w3-text-grey">
                   <b>Menu</b> - The waiter can see the menu available at any moment in restaurant.
                   </p>

                   <div
                    style={{
                        textAlign: "center",
                        marginTop: "30px",
                        marginBottom: "30px"
                    }}
                    >
                    <img style={{ height: "300px", width: "450px"}} src={waiterMeniu} alt="" />
                    </div>
                   </div>
                   <h4>Conclusions and future work
           </h4>
           <p className="w3-text-grey">
           Our team worked for almost 3 weeks to develope this application.
           </p>
           <p className="w3-text-grey">
	       For the moment the application contains the core functionalities that are needed in this kind of application.<br />
	       The Statistics functionality and the Client fidelity functionality were not needed at this point because our main focus was to create an application that aims to solve the main problems that occure in 
	       the daily activities in a restaurant.<br />
           </p>
           <p className="w3-text-grey">
	       We planned to implement these features in a future version of the application together with some improvements of the existing features, after the 
           feedback that we will receive from our potential users when they test this prototype.
           </p>

           <p className="w3-text-grey">
	       Since our application is a Desktop application and our database is local we have thought that the best way to present the prototype at the moment is through a video that can be viewed below:
           </p>

           <div
                    style={{
                        textAlign: "center",
                        marginTop: "30px",
                        marginBottom: "30px"
                    }}
                    >
                    <video width="500" height="400" controls>
                        <source src={appVideo} type="video/webm" />
                    </video>
            </div>
           </div>
                );
        }
}
