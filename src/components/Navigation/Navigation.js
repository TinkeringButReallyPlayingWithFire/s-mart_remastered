import * as React from "react";
import { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import {
  container,
  navbarColours,
  profileIconSVG,
  navigationDropdownContainer,
} from "./Navigation.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Auth } from "aws-amplify";
import { Helmet } from "react-helmet";
import NavigationProfileCard from "./NavigationProfileCard";
<Helmet>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
</Helmet>;
const Navigation = (props) => {
  const amnesiaHome = () => {
    window.localStorage.clear(); //clear all localstorage
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameAttribute, setUsernameAttribute] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    isUserLoggedIn();
  }, []);

  const isUserLoggedIn = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  function getUserInfo() {
    return Auth.currentUserInfo()
      .then((res) => {
        setUsernameAttribute(res.username);
      })
      .catch((err) => {
        console.log("Current user info failed to fetch", err);
      });
  }

  {
    console.log("deadd aaaaaa", usernameAttribute);
  }
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
        {console.log("DA PROPPPPPPPP", props)}
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/" onClick={amnesiaHome}>
              Home
            </a>

            <a className="navbar-item">Documentation</a>
          </div>

          <div className="buttons">
            {/* USER CHECKING */}
            {isLoggedIn ? (
              <p>
                <strong>Welcome back {usernameAttribute}</strong>
              </p>
            ) : (
              <Link to="/Signin/" className="button is-primary">
                <strong>Login</strong>
              </Link>
            )}

            <div className={`navbar-end ${navigationDropdownContainer}`}>
              <div className="navbar-item">
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    <StaticImage
                      class={profileIconSVG}
                      src="../../images/person-circle-outline.svg"
                      alt="Person icon for a profile"
                    />
                  </a>

                  <div
                    class={`navbar-dropdown`}
                    onMouseOver={() => {
                      setIsHovered(true);
                    }}
                  >
                    {isLoggedIn && isHovered ? (
                      <NavigationProfileCard />
                    ) : (
                      <div>
                        <p>You are not currently logged in.</p>
                        <Link to="/Signin/" className="button is-primary">
                          <strong>Login</strong>
                        </Link>
                      </div>
                    )}
                    <a class="navbar-item">About</a>
                    <a class="navbar-item">Jobs</a>
                    <a class="navbar-item">Contact</a>

                    <hr class="navbar-divider" />
                    <a class="navbar-item">Report an issue</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
