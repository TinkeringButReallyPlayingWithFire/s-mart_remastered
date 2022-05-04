import React from "react";
import "bulma/css/bulma.css";
import "materialize-css/dist/css/materialize.min.css";
import "./Products.css";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import products from "../../pages/ProductsData.json";
import slugify from "react-slugify";
import breeze from "../../images/breeze.mp4";
import { StaticImage } from "gatsby-plugin-image";
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
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  ></link>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</Helmet>;

function OnProductClick(e) {
  e.preventDefault();
}

function Products() {
  // const [productClicked, setProductClicked] = useState(false);

  // const [clickedIndex, setClickedIndex] = useState({});
  // console.log("click state", clickedIndex);
  // const handleClick = (index) => () => {
  //   setClickedIndex((prevState) => ({
  //     ...prevState, // <-- copy previous state
  //     [index]: !prevState[index], // <-- update value by index key
  //   }));
  // };

  //   function preventDefaultANDState() {
  //     OnProductClick();
  //   }

  // const [data, setData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const getProductsFromApiAsync = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const responseJson = await response.json().then(setIsLoading(false));
  //     setData(responseJson);
  //   };
  //   getProductsFromApiAsync();
  // }, []);

  let eachProductStored = [];
  eachProductStored.push(products);

  function RenderProducts() {
    return eachProductStored[0].map((products, index) => {
      return (
        <div key={products.id} className="productContainer">
          <div class="card cardContainer">
            <img
              class="card-img-top"
              src={products.image}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{products.title}</h5>
              <p class="card-text">£{products.price}</p>
              <Link
                to={`/products/${slugify(products.title)}`}
                class="btn btn-primary linkContainer"
              >
                View product
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="videoContainer">
      <div className="productsContainerBody">
        <video className="videoBody" preload="auto" loop autoPlay muted>
          <source src={breeze} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <RenderProducts />
    </div>
    // {/* {isLoading ? <ProductPreloader /> : null} */}
  );
}
export default Products;
