import React, { Component } from 'react';

import '../../css/Milestones.css'
import avatar from"../../res/avatar.jpg"
export default class Milestone4 extends Component {
  render() {
    return (
        <div className="milestone-container">
            <h1 className="w3-center" style = {{fontSize: '22px', color: '#184524'}}>UX</h1><br />
            <p className="w3-text-grey" >
The main customer segment that we are targeting consists of restaurant managers and employees. So we interviewed three people, one restaurant manager and two waiters in order to identify the problems that they are facing in their activity at the restaurant.
You can see below the questions as well as the answers provided by the people we interviewed.</p><br />

            <h3>Interviews</h3>
            <h4>What is your role in the restaurant?</h4>
                <ul className="responses-container">
                    <p><label className="employee-1"><b>Employee 1</b>:</label>I am the manager of the restaurant.</p>
                    <p><label className="employee-2"><b>Employee 2</b>:</label>I am a waiter at the restaurant that I work.</p>
                    <p><label className="employee-3"><b>Employee 3</b>:</label>I work as a waiter.</p>
                </ul>

            <h4>What do you think that is the average time required to serve an order in your restaurant?</h4>
            <ul className="responses-container">
                <p><label className="employee-1"><b>Employee 1</b>:</label>I think the average time needed to serve an order is about 40 minutes.</p>
                <p><label className="employee-2"><b>Employee 2</b>:</label>The average time is somewhere around 35-45 minutes.</p>
                <p><label className="employee-3"><b>Employee 3</b>:</label>From my experience the average time of delivering an order is 35 minutes.</p>
            </ul>

            <h4>How are the stocks managed in your restaurant in your restaurant?</h4>
                <ul className="responses-container">
                    <p><label className="employee-1"><b>Employee 1</b>:</label>We are using record sheets for the quantity and expiring date of the goods.</p>
                    <p><label className="employee-2"><b>Employee 2</b>:</label>The stocks management is done by the manager every day by filling out some sheets.</p>
                    <p><label className="employee-3"><b>Employee 3</b>:</label>The stocks management is done on a daily basis on an Excel sheet.</p>
                </ul>
               
            <h4>How do you manage the tables when the restaurant is busy?</h4>
            <ul className="responses-container">
                <p><label className="employee-1"><b>Employee 1</b>:</label>Every waiter knows the number of each table but it gets pretty hard when we have to put together tables and to adjust the seats.</p>
                <p><label className="employee-2"><b>Employee 2</b>:</label>In our restaurant each waiter has his own tables that he manage .</p>
                <p><label className="employee-3"><b>Employee 3</b>:</label>In our restaurant we have a map of all the tables so everybody can find the table number.</p>
            </ul>
           
            <h4>What other segments of your restaurant activity you think can be improved?</h4>
                <ul className="responses-container">
                    <p><label className="employee-1"><b>Employee 1</b>:</label>I think we should improve our menu and make it more flexible to our clients wishes.</p>
                    <p><label className="employee-2"><b>Employee 2</b>:</label>In our restaurant we should improve the way that we manage our clients when the restaurant in almost full.</p>
                    <p><label className="employee-3"><b>Employee 3</b>:</label>We can improve our menu, so we can present clearly to our clients what we can offer them.</p>
                </ul>
         
            <h4>Do you think that a software solution for orders/stocks/menu/tables management can be implemented in your restaurant? If yes, do you think it would be useful?</h4>
                <ul className="responses-container">
                    <p><label className="employee-1"><b>Employee 1</b>:</label>I definitely think it will be useful and the employees will get used to it quickly.</p>
                    <p><label className="employee-2"><b>Employee 2</b>:</label>I think it can be implemented and of course it will ease our work.</p>
                    <p><label className="employee-3"><b>Employee 3</b>:</label>If such a solution will be implemented I think that everyone from employees to customers will benefit from it.</p>
                </ul>

                
<h3>User Persona</h3>
<div className="persona-container">
    <img className="persona-picture" src={avatar} alt=""/>
    <div className="persona-details-container">
        <div className="persona-first-container">
            <p><b>Name</b>: Alexander</p>
            <p><b>Age</b>: 23</p>
            <p><b>Gender</b>: Male</p>
            <p><b>Location</b>: Bucuresti</p>
            <p><b>Occupation</b>: Restaurant manager</p>
        </div>

        <div className="persona-second-container">
            <p><b>Behaviour</b>: Alexander is a responsible person. He is involved and cares a lot about his team members.</p>

            <p><b>Needs</b>: Improvement of restarant's management and make it more flexible to clients wishes.</p>

            <p><b>Problems</b>: Long waiting time for clients, hard management of the clients, difficulty in keeping up to date all stocks.</p>
        </div>
    </div>
</div>
        </div>
    );
  }
}
