import "materialize-css/dist/css/materialize.min.css";
import "./Products.css";
import * as React from "react";

function ProductListingCardQuantitySelector() {
  return (
    <div>
      <div class="input-field col s4">
        <select id="add_cusine_type" size="5">
          <option value="" disabled selected>
            Choose your cuisine type
          </option>
          <option value="Australian">Australian</option>
          <option value="American">American</option>
          <option value="British">British</option>
          <option value="Carribean">Carribean</option>
          <option value="Chinese">Chinese</option>
          <option value="French">French</option>
          <option value="Greek">Greek</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Mexican">Mexican</option>
          <option value="Moroccan">Moroccan</option>
          <option value="Spanish">Spanish</option>
          <option value="Thai">Thai</option>
          <option value="Turkish">Turkish</option>
          <option value="Vietnamese">Vietnamese</option>
        </select>
        <label>Cuisine Type</label>
      </div>
    </div>
  );
}

export default ProductListingCardQuantitySelector;
