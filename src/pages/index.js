import * as React from "react";
import Footer from "../components/Footer/Footer";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import Navigation from "../components/Navigation/Navigation";
import Products from "../components/Products/Products";
import { body } from "./index.module.css";
// markup

const IndexPage = () => {
  return (
    <div className={body}>
      <Navigation />
      <HeroCarousel />
      <Products />
      <Footer />
    </div>
  );
};

export default IndexPage;
