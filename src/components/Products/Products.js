import * as React from "react";
import { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import "materialize-css/dist/css/materialize.min.css";
import "./Products.css";
import ProductListingCard from "./ProductListingCard";
import ProductPreloader from "./ProductPreloader";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

<Helmet>
  <link
    rel="stylesheet"
    href="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.css"
  />
  <script
    async
    src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js"
  ></script>
  <div
    id="snipcart"
    data-config-modal-style="side"
    data-api-key="ZjQ4MmRmMzItNmIyNi00ZjM5LWEzODEtYWI1ZDdjNDg4NTk1NjM3ODU4ODU3NjU2OTE4ODIx"
    hidden
    data-autopop="true"
  ></div>
</Helmet>;

function OnProductClick(e) {
  e.preventDefault();
}

function Products() {
  // const [productClicked, setProductClicked] = useState(false);

  //START OF INSERTED CODE
  const [clickedIndex, setClickedIndex] = useState({});
  console.log("clikk sttatee", clickedIndex);
  const handleClick = (index) => () => {
    setClickedIndex((prevState) => ({
      ...prevState, // <-- copy previous state
      [index]: !prevState[index], // <-- update value by index key
    }));
  };

  //END OF INSERTED CODEEEEEEEEEEEEEEEEEEEEEEEEEEE

  //   function preventDefaultANDState() {
  //     OnProductClick();
  //   }

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getProductsFromApiAsync = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const responseJson = await response.json().then(setIsLoading(false));
      setData(responseJson);
    };
    getProductsFromApiAsync();
  }, []);

  let eachProductStored = [];

  for (const product in data) {
    eachProductStored.push(data[product]);
  }

  console.log(eachProductStored);
  function RenderProducts() {
    return eachProductStored.map((products, index) => {
      return (
        <div key={products.id} className="productContainer">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src={products.image}
                  alt="Image of the various products for sale!"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>

                <a href="#" class="snipcart-checkout">
                  Click here to checkout
                </a>

                <div class="media-content">
                  <p class="title is-4">{products.title}</p>
                </div>
              </div>

              <div class="content">
                {products.description}
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
              </div>
            </div>
          </div>
          <div>
            {clickedIndex[index] ? (
              <ProductListingCard props={products} />
            ) : null}
          </div>
        </div>
      );
    });
  }

  return (
    <React.Fragment>
      <button
        type="button"
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
      <RenderProducts />
      {isLoading ? <ProductPreloader /> : null}
    </React.Fragment>
  );
}
export default Products;
