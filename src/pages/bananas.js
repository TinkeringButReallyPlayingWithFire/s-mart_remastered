import * as React from "react";
import "bulma/css/bulma.css";
import Products from "../components/Products/Products";
import "materialize-css/dist/css/materialize.min.css";
import "../components/Products/Products.css";
import products from "../pages/ProductsData.json";

const bananas = () => {
  return <Products />;
};
export default bananas;
