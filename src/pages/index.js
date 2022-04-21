import { Link } from "gatsby";
import React from "react";
import Footer from "../components/Footer/Footer";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import Navigation from "../components/Navigation/Navigation";
import Products from "../components/Products/Products";
import Search from "../components/Searchbox/Searchbox";
import { body } from "./index.module.css";

const searchIndices = [{ name: `Pages`, title: `Pages` }];
// const searchClient = algoliasearch(
//   "O14HNP4P9H",
//   "7617e09e15be831dd191ddbd587186f6"
// );

// markup
const IndexPage = () => {
  return (
    <div className={body}>
      <Navigation />
      <Search indices={searchIndices} />
      <Link to="/lemons/">TO LEMONSSS</Link>
      <Link to="/bananas/">TO BANANASZZZZ</Link>

      <HeroCarousel />
      <Products />
      <Footer />
    </div>
  );
};

export default IndexPage;
