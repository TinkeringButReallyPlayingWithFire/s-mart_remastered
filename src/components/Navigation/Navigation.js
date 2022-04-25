import * as React from "react";
import { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import {
  container,
  navbarColours,
  profileIconSVG,
  navigationDropdownContainer,
  navigationDropdownBox,
  shoppingCartIcon,
} from "./Navigation.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Auth } from "aws-amplify";
import { Helmet } from "react-helmet";
import { SignOut } from "aws-amplify-react";
<Helmet>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.css"
  />
  <script
    async
    src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js"
  ></script>
  <div
    id="snipcart"
    data-config-modal-style="side"
    data-api-key="ZjQ4MmRmMzItNmIyNi00ZjM5LWEzODEtYWI1ZDdjNDg4NTk1NjM3ODU4ODU3NjU2OTE4ODIx"
    hidden
    data-autopop="true"
  ></div>
</Helmet>;

const Navigation = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameAttribute, setUsernameAttribute] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [shoppingIconHovered, setshoppingIconHovered] = useState(false);

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
            <Link to="/" className="navbar-item">
              Home
            </Link>

            <Link to="/products" className="navbar-item">
              Products
            </Link>
          </div>
          <div className={shoppingCartIcon}>
            <StaticImage
              src="../../images/cart-outline.svg"
              alt="Shopping Cart for all your needs"
            />
          </div>

          <div>
            <div className="buttons">
              {/* USER CHECKING */}
              {isLoggedIn ? (
                <p className="welcomeMessageContainer">
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
                      <div>
                        <StaticImage
                          class={profileIconSVG}
                          onMouseOver={() => {
                            setIsHovered(true);
                          }}
                          src="../../images/person-circle-outline.svg"
                          alt="Person icon for a profile"
                        />
                      </div>
                    </a>

                    <div class={`navbar-dropdown ${navigationDropdownBox}`}>
                      {isLoggedIn && isHovered ? (
                        <div class="dropdown is-right is-active">
                          <div class="dropdown-trigger">
                            <p>
                              <strong>Your Account</strong>
                            </p>
                            <button
                              class="button"
                              aria-haspopup="true"
                              aria-controls="dropdown-menu6"
                            >
                              <Link to="/Signin/" className="button is-primary">
                                <strong>Profile</strong>
                              </Link>
                            </button>
                            <button
                              class="button"
                              aria-haspopup="true"
                              aria-controls="dropdown-menu6"
                            >
                              <Link to={SignOut} className="button is-primary ">
                                <strong>Sign Out</strong>
                              </Link>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p>You are not currently logged in.</p>
                          <Link to="/Signin/" className="button is-primary">
                            <strong>Login</strong>
                          </Link>
                        </div>
                      )}
                    </div>
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
