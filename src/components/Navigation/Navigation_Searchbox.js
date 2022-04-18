import * as React from "react";
import "bulma/css/bulma.css";
import "./Navigation.module.css";
import "materialize-css/dist/css/materialize.min.css";

function NavigationSearchbox() {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <form>
            <div class="input-field">
              <input id="search" type="search" required />
              <label class="label-icon" for="search">
                <i class="material-icons">search</i>
              </label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavigationSearchbox;
