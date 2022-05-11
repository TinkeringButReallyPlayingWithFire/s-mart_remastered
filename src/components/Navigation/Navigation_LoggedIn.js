import * as React from "react";
import "bulma/css/bulma.css";
import { navbarColours } from "./Navigation.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

<Helmet>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
</Helmet>;
const Navigation_LoggedIn = (props) => {
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
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <i class="material-icons">add</i>
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">About</a>
                  <a class="navbar-item">Jobs</a>
                  <a class="navbar-item">Contact</a>
                  <hr class="navbar-divider" />
                  <a class="navbar-item">Report an issue</a>
                </div>
              </div>

              <div className="buttons">

                <Link to="/" className="button is-primary">
                  <strong>Home</strong>
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
export default Navigation_LoggedIn;
