import * as React from "react";
import { useState } from "react";

import "materialize-css/dist/css/materialize.min.css";
import "./Products.css";
import NavbarShoppingCard from "../Navigation/NavbarShoppingCard";

function AddToShoppingBagButton(props) {
  const [productCount, setproductCount] = useState([]);
  const [clickedIndex, setClickedIndex] = useState({});
  console.log("clikk sttatee", clickedIndex);
  const handleClick = (props) => () => {
    setproductCount(+1);
    setClickedIndex((prevState) => ({
      ...prevState, // <-- copy previous state
      [props]: !prevState[props], // <-- update value by index key
    }));
  };

  console.log("counterrrrrrrrrrrr", productCount);
  console.log("checkkcck disissi  fujff", clickedIndex);
  let shoppingBagProps = [];

  for (const product in props) {
    shoppingBagProps.push(props[product]);
  }

  console.log("halt adventuror u o1 i seekkk", shoppingBagProps);

  let activeIndexes = [];

  for (const index in clickedIndex) {
    activeIndexes.push(index);
  }

  console.log("atryyyyy dosssss activvv indexxxx", activeIndexes);

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

          {/* PRODUCT PROPS OF EACH INDISIVUAL PRODUCT THAT IS CURRENTLY ACTIVE N THE CARD IS DISPLAYED FOR, U NEED TO NOW USE THIS DATA TO SHOVE ONTO THE SHOPPING LIST NAVBAR FCARD AND SAVE THE PREVIOUS STATE OR WHATEVER N MAKE SUER THE ICON CHANGES WITH A +1 +2 OR HOWEVER MANY ITEMS IN BAG, DEN U CAN HOVER OVER NAVBAR SHOPPING ICON AND SHOW HOW MUCH SHIT U GOT WITH TIUTLE QUANTIY PRICE IMAGE ERTC */}
          {/* {clickedIndex[index] ? <ShoppingBagView props={props} /> : null} */}
        </div>
      );
    });
  }

  return <RenderShoppingBagButton />;
}
export default AddToShoppingBagButton;
