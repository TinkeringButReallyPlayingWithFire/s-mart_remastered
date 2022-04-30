import React from "react";
import "bulma/css/bulma.css";
import "./landingPage.css";
import { StaticImage } from "gatsby-plugin-image";
import snowfall from "../../images/Snowfalls.mp4";
import { Link } from "gatsby";

function LandingPage() {
  return (
    <div>
      <div className="leftSideContainer">
        <div>
          <StaticImage
            src="../../images/S-Mart_logo.svg"
            alt="Company logo!"
            className="sMartLogo"
          />
          <div className="landingLeftTitle">
            <h4 className="content">
              Dust off your wallet and brighten up your home with new spring
              essentials...
            </h4>
            <br />
          </div>
        </div>
        <div>
          <video className="videoBody" preload="auto" loop autoPlay muted>
            <source src={snowfall} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <h4 className="landingRightTitle">
            This season, welcome calming scents, expressive dinnerware and
            perfect music at your fingertips.
          </h4>
        </div>
      </div>
      <Link to="/products" className="button is-primary buttonPOS">
        Start shopping...
      </Link>
    </div>
  );
}

export default LandingPage;
