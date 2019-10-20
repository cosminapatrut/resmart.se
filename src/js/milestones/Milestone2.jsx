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

export default class Milestone2 extends Component {
  render() {
    return (
        <div className="milestone-container">
        <h1 className="w3-center" style = {{fontSize: '22px', color: '#184524'}}>Validation</h1><br />
        <h4>Problem identification</h4>
        <p className="w3-text-grey" >Everything went from a simple outing with friends to a restaurant where we noticed that the services offered by the restaurant are of a rather low quality. At that moment, we began to think of a method by which the working mode of the restaurant could be optimized.
At the same time, through the knowledge from those who professed in this area, we noticed that with the increase of the restaurant in what concerns the number of customers and the number of orders, the management of resources becomes more and more difficult.
In order to convince us that it really is a problem on a large scale, we decided to formulate a questionnaire that we sent to our friends first, and then we distributed it on social networks.</p><br />
        <h4>Our solution</h4>
        <p className="w3-text-grey" >
We thought that the best solution to for our identified problem would be the implementation of a computer system that facilitates the way in which employees' restaurant carry out their activity. We are talking about the time when an order is honored and the quality of the service. At the same time, the proposed IT solution also comes to the aid of the personnel responsible for managing the human and material resources of the restaurant through a digital management.</p><br />
        <h4>Customer discovery</h4>
        <p className="w3-text-grey" >
        As we specified in the previous milestone, the main customer segment that we are targeting consists of restaurant. So, we decided to create two online forms with some relevant questions to collect feedback from cusomers of restaurant and the second one from resturants administrators and workers and to discover what they think about our solution and to discuss directly with our colleagues and friends about our idea to see if they are interested or not.
Also, we contacted some restaurants administrators to see if they are willing to use our solution. So, we sent some emails in which we described our idea.</p>
        <h5> | How we collected information from our customer segment |</h5>
        <div className="subparagraph-container" style={{display: 'flex'}}>
        <p className="w3-text-grey" style={{float: 'left'}}>
          For customers of the restaurants we targeted normal people who go to restaurant and we approached most of them via online questionnaires. We asked people who were in online groups with a lot of students or mature people to distribute our questionnaire.
We asked around 80 people about how frecquently they go to restaurants and more than 65% voted that they go often.
You can acces our first formular <a href="https://docs.google.com/forms/d/e/1FAIpQLScUiUix7kPzuFZbuIaEuXjIXjgs38O7HZcLsml2uB4jGtxYbQ/viewform" >here</a>.</p><br />
      </div>

      <div className="image-container" style={{display: 'flex'}}>
      <img src={question1form1} className="w3-round w3-image w3-opacity-min" width={500} height={550} style={{margin: '5px',float: 'left'}} />
      
      </div>

      <div className="image-container" style={{display: 'flex'}}>
      <img src={question2form1} className="w3-round w3-image w3-opacity-min" width={500} height={550} style={{margin: '5px',float: 'left'}} />
      
      </div>

      <div className="image-container" style={{float: 'center'}}>
      <img src={question3form1} className="w3-round w3-image w3-opacity-min" width={500} height={550} style={{margin: '10px',float: 'center'}} />
     </div> 

     <div className="image-container" style={{float: 'center'}}>
      <img src={question4form1} className="w3-round w3-image w3-opacity-min" width={500} height={550} style={{margin: '10px',float: 'center'}} />
     </div>

      <div className="subparagraph-container" style={{display: 'flex'}}>
        <p className="w3-text-grey" style={{float: 'left'}}>
          We decided to share also an online form on he social networks to quantify the opinion of people regarding restaurants industry services.
          The questions from the form helped us to convience ourselves of the problems regarding the restaurants industry services that stay at the foundation of our project. You cand see all our questions in the form <a href="https://docs.google.com/forms/d/e/1FAIpQLSeiOEXaUhnwiJ2BquXwXj3Nqr0cdwbL2rF1xId7atys5hNf2A/viewform" >here</a>.</p><br />
      </div>
      
      <div className="image-container" style={{display: 'flex'}}>
      <img src={question1form2} className="w3-round w3-image w3-opacity-min" width={500} height={550} style={{margin: '10px',float: 'center'}} />
     </div>


      <div className="image-container" style={{float: 'center'}}>
      <img src={question2form2} className="w3-round w3-image w3-opacity-min" width={500} height={550} style={{margin: '10px',float: 'center'}} />
     </div>

     <div className="image-container" style={{float: 'center'}}>
      <img src={question3form2} className="w3-round w3-image w3-opacity-min" width={500} height={550} style={{margin: '10px',float: 'center'}} />
     </div>

     <div className="image-container" style={{float: 'center'}}>
      <img src={question4form2} className="w3-round w3-image w3-opacity-min" width={500} height={550} style={{margin: '10px',float: 'center'}} />
     </div>

     <div className="image-container" style={{float: 'center'}}>
      <img src={question5form2} className="w3-round w3-image w3-opacity-min" width={500} height={550} style={{margin: '10px',float: 'center'}} />
     </div>


      <h4>How these insights have affected our product</h4>
        <p className="w3-text-grey" >
        From the form sent to the restaurant employees, it was found that the areas in which the management is carried out with difficulty are: order management (55.3%), personnel management (52.6%) and inventory management (44.7%). These results show that in about half of the restaurants there are management problems in these areas.
Thus, we decided, based on these results, that our project must focus in particular on how these three problems can be reduced, and the result of our project will thus be a specialized IT solution on optimizing and facilitating the management of orders, personnel and stocks.
</p><br />


      <h4>Do you consider that you are ready to move to the Customer Validation stage?</h4>
        <p className="w3-text-grey" >
        Until now, we discussed about the idea, if it resolves an actual problem that many people face with it and the answers of interviewed people was positive.
So, we think that we are ready to move to the Customer Validation stage to discover if the potential customers consider that our solution  is useful and to see if they want to support our idea. We contacted some potential customers, and we are waiting for feedback, but we need more than one to decide if our idea can be validated or not. We will continue to contact the potential customers, to obtain more points of view about our idea.

</p><br />
       

      </div>
    );
  }
}
