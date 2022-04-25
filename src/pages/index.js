import React from "react";
import { body } from "./index.module.css";
import Footer from "../components/Footer/Footer";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import Navigation from "../components/Navigation/Navigation";
import Products from "../components/Products/Products";
import Search from "../components/Searchbox/Searchbox";

const searchIndices = [{ name: `Pages`, title: `Pages` }];

function index() {
  return (
    <div className={body}>
      <Navigation />
      <Search indices={searchIndices} />
      <HeroCarousel />
      <Products />
      <Footer />
    </div>
  );
}

export default index;
