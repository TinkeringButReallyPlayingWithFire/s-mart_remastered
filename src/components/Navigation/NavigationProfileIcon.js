import * as React from "react";
import { useState } from "react";
import { profileIcon } from "./Navigation.module.css";
import "materialize-css/dist/css/materialize.min.css";
import NavigationProfileCard from "./NavigationProfileCard";

function OnProfileClick(e) {
  e.preventDefault();
}

function NavigationProfileIcon() {
  const [isProfileCardVisible, setIsProfileCardVisible] = useState(false);
  return (
    <div className={profileIcon}>
      <li onClick={() => setIsProfileCardVisible(true)}>
        <a href="@" onClick={OnProfileClick}>
          <i class="material-icons">account_circle</i>
        </a>
      </li>
      <div>{isProfileCardVisible ? <NavigationProfileCard /> : null}</div>
    </div>
  );
}

export default NavigationProfileIcon;
