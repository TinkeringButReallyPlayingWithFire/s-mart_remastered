import * as React from "react";
import { useState } from "react";
import "bulma/css/bulma.css";
import { container, navbarColours } from "./Navigation.module.css";
import { StaticImage } from "gatsby-plugin-image";
import NavigationProfileIcon from "./NavigationProfileIcon";
import { Link } from "gatsby";

const Navigation = () => {
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
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
          <div>{/* <NavigationProfileIcon /> */}</div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/Signin/" className="button is-primary">
                  <strong>Login</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
