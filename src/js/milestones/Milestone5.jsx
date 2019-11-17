import React, { Component } from "react";

import "../../css/Milestones.css";
import facebookLogo from "../../res/facebook.jpg";
import linkedinLogo from "../../res/linkedin.jpg";
import fb1 from "../../res/PostFbEgov.jpg"
import fb2 from "../../res/PostFbMAster.jpg"
import linkedinpost from "../../res/PostLinkedin.jpg"
import analytics from "../../res/analytics.JPG"
import hotjar from "../../res/hotjar.JPG"

export default class Milestone5 extends Component {
  render() {
    return (
      <div className="milestone-container">
        <h1
          className="w3-center"
          style={{ fontSize: "22px", color: "#184524" }}
        >
          Lead Generation and Collection
        </h1>
        <br />
        <h1
          className="w3-center"
          style={{ fontSize: "22px", color: "#184524" }}
        >
          Where we shared our product's landing page
        </h1>
        <p className="w3-text-grey">
          To bring people on our product's landing page, we share it in some
          relevant groups on Facebook and LinkedIn.
        </p>

        <div className="social-networks-container">
          <div className="social-network-container">
            <img
              src={facebookLogo}
              style={{ width: "100px", height: "100px" }}
              alt=""
            />
          </div>

          <div className="social-network-container">
            <img src={linkedinLogo} style={{ height: "65px" }} alt="" />
          </div>
        </div>

        <p className="w3-text-grey">
          On <b>Facebook</b>, we looked for groups relevant to our field and we
          found two groups that matched our needs.
        </p>
        <p className="w3-text-grey">
          The first one is one of the biggest startup related groups on
          Facebook, having a number of 125,407 members.
        </p>
        <p className="w3-text-grey">
          The second one is Start-Up Nation 2018 and it is created by a group of
          romanians from Cluj Napoca and it has 1,660 members.
        </p>
        <div className="screenshots-container"
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px"
            
          }}
        >
          <img style={{ height: "500px",width: "400px", marginRight: "30px"}} src={fb1} alt="" />
          <img style={{ height: "500px",width: "400px" }} src={fb2} alt="" />
        </div>

        <p className="w3-text-grey">
          On <b>LinkedIn</b>, one of our colleague posted on his feed and he
          reached TODO views.
        </p>

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px"
          }}
        >
          <img style={{height: "500px"}} src={linkedinpost} alt=""/>
        </div>

        <h1
          className="w3-center"
          style={{ fontSize: "22px", color: "#184524" }}
        >
          Visitors
        </h1>
        <p className="w3-text-grey">
          To track the number of visitors on our landing page, we used
          <b> Google Analytics and Hotjar</b>.
        </p>
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px"
          }}
        >
          <img style={{height: "300px"}} src={analytics} alt=""/>
        </div>
        <p className="w3-text-grey">
          According to Google Analytics we have 28 different users that visited
          our page and according to Hotjar 32. We highlighted the most important
          sources of our traffic in the figure above and as you can see, most of
          our traffic comes from direct sources. Because how LinkedIn works the
          traffic that came from this social media website is included in direct
          traffic. So, the social media channel that worked best for us is
          LinkedIn with 47,2% of our traffic. This result was expected because
          on LinkedIn we have a lot of people interested in our field. After
          that, on the second place is our course page with 22,2%. The reason is
          the same as above, but the audience wasn’t as much as on LinkedIn. On
          the thirth place we have Facebook with an accumulated 19,5% (Facebook
          website + Facebook messenger + mobile app). Even if the reach was the
          greatest in this case, the results weren’t as good as we expected.
          Maybe this happened because people don’t pay as much attention of
          Facebook as they used to or maybe we haven’t chose the audience very
          good.
        </p>

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px"
          }}
        >
          <img style={{ height: "369px" }} src={hotjar} alt="" />
        </div>

        <p className="w3-text-grey">
          A nice feature that Hotjar provide are heatmaps. Using this feature we
          can see where people spent most of their time on our page and where
          they clicked. Analyzing this data, we observed that 87 clicks were
          recorded and the most of the clicks (22,99%) were on “Get Started”
          button. This means that people are interested in our application and
          they can’t wait to get started.
        </p>

        <p className="w3-text-grey">
          So far we have accomplished to convince TODO people to subscribe to
          our newsletters.
        </p>
      </div>
    );
  }
}
