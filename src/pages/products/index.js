import { Link } from "gatsby";
import React from "react";
import Footer from "../../components/Footer/Footer";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import Navigation from "../../components/Navigation/Navigation";
import Products from "../../components/Products/Products";
import Search from "../../components/Searchbox/Searchbox";
import "../index.css";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../../../gatsby-browser";
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const searchIndices = [{ name: `Pages`, title: `Pages` }];
// const searchClient = algoliasearch(
//   "O14HNP4P9H",
//   "7617e09e15be831dd191ddbd587186f6"
// );

// markup
const IndexPage = () => {
  return (
    <div className="body">
      <Navigation />
      <Search indices={searchIndices} />
      <HeroCarousel />
      <h2 className="browseProductTitle">Browse all products</h2>
      <Products />
      <Footer />
    </div>
  );
};

export default IndexPage;
