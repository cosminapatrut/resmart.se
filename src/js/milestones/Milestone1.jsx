import React, { Component } from 'react';
import '../../css/Milestones.css'

export default class Milestone1 extends Component {
  render() {
    return (
        <div className="milestone-container">
        <h1 className="w3-center" style = {{fontSize: '22px', color: '#184524'}}>More Details</h1><br />
        <h4>Project title</h4>
        <p className="w3-text-grey">ResMart, our restaurat management art.</p><br />
        <h4>The problem that our team noticed</h4>
        <p className="w3-text-grey">The most important problem that we identified is the time in which the orders are honored within a restaurant, but also the quality of the services that restaurants are providing. These problems can be solved by using an IT solution for managing the activity of a restaurant.</p><br />
        <h4>Our solution</h4>
        <p className="w3-text-grey">The solution proposed by us is an application that facilitates the management of the human and material resources of a restaurant and which also allows the management of restaurant orders. The application can be customized according to the client's needs, from the menu structure all the way to the tables arangement within a restaurants.</p><br />
        <h4>Competition</h4>
        <p className="w3-text-grey">Among the competitors already on this market are: Freya Restaurants and Nexus Restaurants.</p><br />
        <h4>Our advantage over the competition</h4>
        <p className="w3-text-grey">Among the advantages that our solution proposes over the competition are the possibility of customer loyality, alerting when stocks are approaching a threshold and the possibility of customizing the way the tables are arranged.</p><br /> 
        <h4>Key metrics</h4>
        <p className="w3-text-grey">Among the key metrics are: - The delivery time of an order. - The level of satisfaction of restaurant customers. - The quantity of raw materials thrown in each month(optimization of raw materials use).</p><br /> 
        <h4>Cost structure</h4>
        <p className="w3-text-grey">Full package (resources management and orders management) subscription - 300 EUR / month.</p>
        <p className="w3-text-grey">Resources package (resources management) subscription - 100 EUR / month.</p>
        <p className="w3-text-grey">For each special feature on user demand - 20 EUR / month.</p><br /> 
        <h4>Revenue streams</h4>
        <p className="w3-text-grey">Monthly subscription, extra features on demand.</p><br />  
      </div>
    );
  }
}
