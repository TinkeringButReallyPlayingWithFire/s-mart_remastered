import * as React from "react";
import { useState } from "react";

import "materialize-css/dist/css/materialize.min.css";
import NavbarShoppingOverviewCard from "./NavbarShoppingOverviewCard";

function OnProfileClick(e) {
  e.preventDefault();
}

function NavbarShoppingIcon() {
  const [isShoppingCardVisible, setIsShoppingCardVisible] = useState(false);
  const [isShoppingOverviewCardVisible, setisShoppingOverviewCardVisible] =
    useState(false);
  return (
    <div className="ShoppingIcon">
      <li
        onMouseOver={() => setisShoppingOverviewCardVisible(true)}
        onClick={() => setIsShoppingCardVisible(true)}
      >
        <a href="shopping.html" onClick={OnProfileClick}>
          <i class="material-icons">shopping_basket</i>
        </a>
      </li>
      {/* <div>{isShoppingOverviewCardVisible ? <ShoppingBagView /> : null}</div> */}
      {/* <div>{isShoppingCardVisible ? <NavbarShoppingCard /> : null}</div> */}
    </div>
  );
}
export default NavbarShoppingIcon;
