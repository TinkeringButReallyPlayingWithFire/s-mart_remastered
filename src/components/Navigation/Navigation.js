import * as React from "react";
import { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import Search from "../../components/Searchbox/Searchbox";
import {
  navbarColours,
  profileIconSVG,
  navigationDropdownContainer,
  shoppingCartIcon,
  yourAccountTitle,
  yourAccountButtons,
  yourAccountTitleBurger,
  navburgerContainer,
  searchboxContainer,
  notSignedInText,
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
  const [isBurgerActive, setisBurgerActive] = useState(false);

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

  const searchIndices = [{ name: `Pages`, title: `Pages` }];

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
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
            }}
            role="button"
            class="navbar-burger"
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <div
            id="navbarBasicExample"
            className={`navbar-menu ${isBurgerActive ? "is-active" : ""}`}
          >
            <div className={`navbar-start ${navburgerContainer}`}>
              {isBurgerActive && isLoggedIn ? (
                <div className={yourAccountButtons}>
                  <p className={`navbar-item ${yourAccountTitleBurger}`}>
                    Your Account
                  </p>
                  <Link to="/" className="navbar-item button is-primary">
                    Home
                  </Link>
                  <Link to="/Signin" className="navbar-item button is-primary">
                    Profile
                  </Link>
                </div>
              ) : null}
              {!isLoggedIn && isBurgerActive ? (
                <Link to="/Signin" className="navbar-item button is-primary">
                  Login
                </Link>
              ) : null}
            </div>
          </div>
          <div class="navbar-menu" id="navMenu"></div>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>

            <Link to="/products" className="navbar-item">
              Products
            </Link>

            <div
              className={shoppingCartIcon}
              onClick={() => {
                setshoppingIconHovered(!shoppingIconHovered);
              }}
            >
              <StaticImage
                className="snipcart-checkout"
                src="../../images/cart-outline.svg"
                alt="Shopping Cart for all your needs"
              />
            </div>
            <div className="shoppingBagCountContainer">
              <span class="snipcart-items-count shoppingBagCount"></span>
            </div>
          </div>

          <div className={searchboxContainer}>
            <Search indices={searchIndices} />
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

                    {isLoggedIn && isHovered ? (
                      <div>
                        <h6 className={yourAccountTitle}>Your Account</h6>
                        <Link to="/Signin" className="button is-primary">
                          Profile
                        </Link>
                      </div>
                    ) : null}
                    {isLoggedIn == false && isHovered ? (
                      <div>
                        <p className={notSignedInText}>
                          You are not currently signed in!
                        </p>
                      </div>
                    ) : null}
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
