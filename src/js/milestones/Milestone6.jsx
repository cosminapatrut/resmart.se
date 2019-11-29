import React, { Component } from "react";

import "../../css/Milestones.css";

export default class Milestone6 extends Component {
        render() {
                return (
                    <div className="milestone-container">
                    <h1
                     className="w3-center"
                     style={{ fontSize: "22px", color: "#184524" }}
                   >
                     Market Research
                   </h1>
                   <br />
                   <div>
                   <h4>The volume of our target market(including the different sub-markets)
           </h4>
                   <p className="w3-text-grey">
                   Since our main costumores are the restaurants we can start estimating our target market by analizing the restaurants market.
           In 2019, in Romania,there are aproximativly 40,000 restuarants and this number seems to be growing each year. From that 40,000 restaurants only 
           The market volume is calculating based on the number of target customers and the penetration rate.
           From our surveys it turned out that 92% of restaurant's managers would adapt an IT solution that facilitates the management within a restaurant.
           So, with a penetration rate of 0,92 the market volume would be about 36,800.
                   </p>
                   </div>
                  <div> 
                   <h4>The approximate number of players / competitors in our targeted market and the presentation of the competioion
           </h4>
                   <p className="w3-text-grey">
                   After we analyzed the market, we identified 3 major competitors that aproached the same areas: AsiS Restaurant, Nexus Restaurant and Freya Restaurant.
           The main competitor would be Freya Restaurant one of the biggest players on the Romanian market.  The main functionalities besides the classic restaurant management features by which this application is noted are the customization of payment notes and the possibility of planning price changes at certain time intervals.
           The software company is 15 years old in this field, a turnover of approximately 5.5 million RON and a profit for 2018 of 600.000 RON
           Another important competitor is Nexus Retaurant. They have developed a management application that focuses in particular on the management of raw materials and the customization of orders, these being the main needs of a restaurant.
           AsiS Restaurant is not as well-known as the other two solutions presented above, but this is still noted by the emphasis it places on the advanced customization of payment notes and on the possibility of elaborately arranging meals.
                </p>
                </div>
           <div>
                   <h4>Estimation for our potential market share in year 1, 2, 3, 4 and 5 after launch
           </h4>
                   <p className="w3-text-grey">
                   Year 1:  In the first year we expect that 5% of the restaurants to use our software. Our market share would be of 5%.
                   <br />

           Year 2: In the second year we expect our market share to grow from first year value of 5% to 15%.
           <br />

           Year 3: We also expect that in the third year our market share will continue to grow up to 25%.A value of 25% would make us a serious market player.
           <br />

           Year 4: In the fourth year we expect that a new competitor would come up with an inovative solution and we will probably lose 5%-10% of our market share .
           <br />

           Year 5: In the fifth year we we would add new inovative features to our solution and we will regain our 25% of market share. We will try to close a deal with one of competitors on the market in order to obtain a percentage of more than 50%.
                   </p>
                   </div>
           <div>
                   <h4>The total market value and the value of market share for years 1, 2, 3, 4, 5
           </h4>
                   <p className="w3-text-grey">
                   Because we came up with a full solution of restaurant management and with new features compared to our competitors, we expect that our clients will increase each year and this will also determine an increase in our market value.        <br />

           
           Year 1: In the first year we expect that the total market value would be around 524 million EUR. As we expect the percentage of our market share to be around 5%, its value will therefore be around 26.2 million EUR.
           <br />

           Year 2: In the second year we expect a total market value of 580 million EUR. As we expect the percentage of our market share to be around 15%, its value will therefore be around 87 million EUR.
           <br />

           Year 3: In the third year we expect a total market value of 600 million EUR. As we expect the percentage of our market share to be around 25%, its value will therefore be around 150 million EUR.
           <br />

           Year 4: In the fourth year we expect a total market value of 605 million EUR. As we expect the percentage of our market share to be around 15%, its value will therefore be around 91 million EUR.
           <br />

           Year 5: In the fifth year we expect a total market value of 620 million EUR. As we expect the percentage of our market share to be around 55%, its value will therefore be around 341 million EUR.
           
           </p>
                  
           </div>  </div>
                );
        }
}
