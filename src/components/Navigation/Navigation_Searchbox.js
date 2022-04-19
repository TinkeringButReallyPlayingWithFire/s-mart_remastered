import * as React from "react";
import { useState, useEffect } from "react";

import "bulma/css/bulma.css";
import { searchbox } from "./Navigation.module.css";

function NavigationSearchbox(props) {
  return (
    <div className={searchbox}>
      <div class="field has-addons">
        <div class="control">
          <input
            class="input"
            type="text"
            id="myInput"
            placeholder="Search for a product"
          />
        </div>
        <div class="control">
          <a class="button is-info">Search</a>
        </div>
      </div>
    </div>
  );
}

export default NavigationSearchbox;
