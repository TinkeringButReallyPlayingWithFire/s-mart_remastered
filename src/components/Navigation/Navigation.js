import * as React from "react";
import { useState } from "react";
import "bulma/css/bulma.css";
import { container, navbarColours } from "./Navigation.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Auth } from "aws-amplify";
const Navigation = (props) => {
  const amnesiaHome = () => {
    window.localStorage.clear(); //clear all localstorage
  };
  return (
    <div>
      <nav
        className={`navbar ${navbarColours}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="?">
            <StaticImage
              src="./../../images/S-Mart_logo.svg"
              alt="A colourful shopping cart logo with the brand name."
            />
          </a>
          {/* {console.log("dis be da propspssppsp", userInfo)} */}
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/" onClick={amnesiaHome}>
              Home
            </a>

            <a className="navbar-item">Documentation</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {/* {Auth.currentAuthenticatedUser ? (
                    <p>
                      <strong>
                        Welcome back {Auth.currentUserInfo.username}
                      </strong>
                    </p>
                  ) : ( */}
                <Link to="/Signin/" className="button is-primary">
                  <strong>Login</strong>
                </Link>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
