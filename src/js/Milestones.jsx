import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Milestone1 from "./milestones/Milestone1"
import Milestone2 from "./milestones/Milestone2"

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
        tabRenderer: () => (<div>Stay tuned! Coming soon</div>)
      },
      {
        tabTitle: "Milestone 4",
        tabRenderer: () => (<div>Stay tuned! Coming soon</div>)
      },
      {
        tabTitle: "Milestone 5",
        tabRenderer: () => (<div>Stay tuned! Coming soon</div>)
      },
      {
        tabTitle: "Milestone 6",
        tabRenderer: () => (<div>Stay tuned! Coming soon</div>)
      },
      {
        tabTitle: "Milestone 7",
        tabRenderer: () => (<div>Stay tuned! Coming soon</div>)
      },
      {
        tabTitle: "Milestone 8",
        tabRenderer: () => (<div>Stay tuned! Coming soon</div>)
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
