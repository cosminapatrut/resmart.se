import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Milestone1 from "./milestones/Milestone1"
import Milestone2 from "./milestones/Milestone2"
import Milestone3 from "./milestones/Milestone3"
import Milestone4 from "./milestones/Milestone4"
import Milestone5 from "./milestones/Milestone5"
import Milestone6 from "./milestones/Milestone6"
import Milestone7 from "./milestones/Milestone7"
import Milestone8 from "./milestones/Milestone8"

import style from "../App.css"
export default class Milestones extends Component {
  constructor() {
    super();
    this.tabData = [
      {
        tabTitle: "Milestone 1",
        tabRenderer: () => (<Milestone1 />)
      },
      {
        tabTitle: "Milestone 2",
        tabRenderer: () => (<Milestone2 />)
      },
      {
        tabTitle: "Milestone 3",
        tabRenderer: () => (<Milestone3 />)
      },
      {
        tabTitle: "Milestone 4",
        tabRenderer: () => (<Milestone4 />)
      },
      {
        tabTitle: "Milestone 5",
        tabRenderer: () => (<Milestone5 />)
      },
      {
        tabTitle: "Milestone 6",
        tabRenderer: () => (<Milestone6 />)
      },
      {
        tabTitle: "Milestone 7",
        tabRenderer: () => (<Milestone7 />)
      },
      {
        tabTitle: "Milestone 8",
        tabRenderer: () => (<Milestone8 />)
      }
    ];
  }
  render() {
    const tabTitles = this.tabData.map(item => {
      return (<Tab>
        <h4  style={{fontSize: '20px', color: '#b34d1e', fontWeight: 'bolder'}}>
          {item.tabTitle}
        </h4></Tab>)
    });
    const tabViews = this.tabData.map(item => {
      return (<TabPanel>{item.tabRenderer()}</TabPanel>)
    }); 
    return (
      <div>
        <Tabs>
          <TabList>
            {tabTitles}
          </TabList >
          {tabViews}
        </Tabs>
      </div>
    );
  }
}
