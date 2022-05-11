import * as React from "react";
import { useState } from "react";

import "materialize-css/dist/css/materialize.min.css";
import "./Products.css";

function AddToShoppingBagButton(props) {
  const [productCount, setproductCount] = useState([]);
  const [clickedIndex, setClickedIndex] = useState({});
  const handleClick = (props) => () => {
    setproductCount(+1);
    setClickedIndex((prevState) => ({
      ...prevState, // <-- copy previous state
      [props]: !prevState[props], // <-- update value by index key
    }));
  };


  let shoppingBagProps = [];

  for (const product in props) {
    shoppingBagProps.push(props[product]);
  }


  let activeIndexes = [];

  for (const index in clickedIndex) {
    activeIndexes.push(index);
  }


  function RenderShoppingBagButton() {
    return shoppingBagProps.map((props, index) => {
      return (
        <div>
          <a
            onClick={handleClick(index)}
            class="waves-effect waves-light btn addToShoppingBagButton"
          >
            <i class="material-icons right ">add_shopping_cart</i>Add to
            shopping bag
          </a>

        </div>
      );
    });
  }

  return <RenderShoppingBagButton />;
}
export default AddToShoppingBagButton;
