import * as React from "react";
import { graphql } from "gatsby";
import "bulma/css/bulma.css";
import Navigation from "../../components/Navigation/Navigation";
import "./productRoutedPages.css";
import Footer from "../../components/Footer/Footer";
import GiscusMain from "../../components/Giscus/Giscus";
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

const ProductsPost = ({ data }) => {
  return (
    <div className="content">
      <Navigation />
      <div class="columns">
        <div class="column col1_container">
          First column
          <img
            className="productImage"
            src={data.productsDataJson.image}
            alt="All product images are listed here, from bags to SSDs - we have it all!"
          />
        </div>
        <div class="column">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="#">Bulma</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Components</a>
              </li>
              <li class="is-active">
                <a href="#" aria-current="page">
                  Breadcrumb
                </a>
              </li>
            </ul>
          </nav>

          <div class="column col2_container">
            <h3>{data.productsDataJson.title}</h3>
            <p className="productStyleText">Style ‎636709 1TR0G 8106</p>
            <p>Availability: In Stock</p>
            <br />
            <h6>
              <strong>Product Information</strong>
            </h6>
            <p>{data.productsDataJson.description}</p>
            <br />
            <h5>
              <strong>£{data.productsDataJson.price}</strong>
            </h5>
            <br />
            <h5>Materials and Care</h5>
            <div>
              <ol class="is-upper-roman">
                <li>
                  Protect from direct light, heat and rain. Should it become
                  wet, dry it immediately with a soft cloth
                </li>
                <li>
                  Do not carry heavy products that may affect the shape of the
                  product
                </li>
                <li>Clean with a soft, dry cloth</li>
              </ol>
            </div>
            <div>
              <div>
                <button
                  class="snipcart-add-item button is-primary"
                  data-item-id={data.productsDataJson.id}
                  data-item-name={data.productsDataJson.title}
                  data-item-image={data.productsDataJson.image}
                  data-item-price={data.productsDataJson.price}
                  data-item-url="https://smartremasteredmaster.gatsbyjs.io/"
                  data-item-description={data.productsDataJson.description}
                >
                  Add to shopping cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mybliggggg">
        My blog post contents will go here (eventually).
      </p>
      <GiscusMain />

      <Footer />
    </div>
  );
};

export const query = graphql`
  query ($id: String) {
    productsDataJson(id: { eq: $id }) {
      id
      title
      image
      description
      price
      rating {
        rate
      }
    }
  }
`;

export default ProductsPost;
