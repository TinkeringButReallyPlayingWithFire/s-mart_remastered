import * as React from "react";

import "materialize-css/dist/css/materialize.min.css";
import AddToShoppingBagButton from "./AddToShoppingBagButton";
import ProductListingCardQuantitySelector from "./ProductListingCardQuantitySelector";

function ProductListingCard(props) {
  // function OnProductClick(e) {
  //   e.preventDefault();
  // }
  // var productProps = [];
  // productProps.push(props);

  let productProps = [];

  for (const product in props) {
    productProps.push(props[product]);
  }

  function Ratings() {
    return (
      <div>
        <li>
          <ol>
            <i class="material-icons ">star</i>
          </ol>
        </li>
      </div>
    );
  }
  //   function ratingsView(rating) {
  //     let ratingsStore = [];
  //     console.log("rating store arr", ratingsStore);
  //  return (
  //    ratingsStore.map(() =>  {
  //       return (
  //         <Ratings />
  //       )
  //    })

  //  )

  //   }

  return productProps.map((product, index) => {
    return (
      <div>
        <button
          class="snipcart-add-item"
          data-item-id="2"
          data-item-name="Bacon"
          data-item-price="3.00"
          data-item-weight="20"
          data-item-url="/"
          data-item-description="Some fresh bacon"
        >
          Buy bacon
        </button>
        <a href="#" class="snipcart-checkout">
          Click here to checkout
        </a>
      </div>
    );
  });
}

export default ProductListingCard;
