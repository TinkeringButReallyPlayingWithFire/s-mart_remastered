import * as React from "react";
import { useState } from "react";
import "./Navigation.module.css";
import "materialize-css/dist/css/materialize.min.css";

function NavigationProfileCard() {
  const [closedProfileCard, setclosedProfileCard] = useState(false);
  return (
    <div className="navbarProfileCardContainer">
      <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src={require("../../images/pattern.jpg")} />
              <span class="card-title">Card Title</span>
            </div>
            <div className="profileIcon">
              <li /*onClick={() => setclosedProfileCard(true)}*/>
                <a href="@" /*onClick={OnProfileClick}*/>
                  <i class="material-icons profileCardCloseIcon">close</i>
                </a>
              </li>
              {/* <div>
        {closedProfileCard ? null : <NavbarProfileCard/>}
      </div> */}
            </div>
            <div class="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="@">Close</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavigationProfileCard;
