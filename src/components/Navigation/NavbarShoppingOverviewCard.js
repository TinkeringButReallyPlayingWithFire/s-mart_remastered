import * as React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./NavbarShoppingIcon";

function NavbarShoppingOverviewCard() {
  return (
    <div className="navbarShoppingCardContainer shoppingOverview">
      <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <span class="card-title shoppingCardTitle">Shopping Cart</span>
            </div>
            <div className="profileIcon">
              <li /*onClick={() => setclosedProfileCard(true)}*/>
                <a href="@" /*onClick={OnProfileClick}*/>
                  <i class="material-icons shoppingCardCloseIcon">close</i>
                </a>
              </li>
              {/* <div>
        {closedProfileCard ? null : <NavbarProfileCard/>}
      </div> */}
            </div>
            <div class="card-content shoppingCardText">
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

export default NavbarShoppingOverviewCard;
