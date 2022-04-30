import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { container, carousel_body } from "./HeroCarousel.module.css";

export default class HeroCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <div className={carousel_body}>
        <div className={container}>
          <Slider {...settings}>
            <div class="parallax-window" data-parallax="scroll">
              <StaticImage
                className="carousel_image"
                src="../../images/sale.jpg"
                alt="Sale"
              />
            </div>
            <div>
              <StaticImage
                className="carousel_image"
                src="../../images/full-assortment.jpg"
                alt="Sale"
              />
            </div>
            <div>
              <StaticImage
                className="carousel_image"
                src="../../images/sneakers.jpg"
                alt="Sale"
              />
            </div>
            <div>
              <StaticImage
                className="carousel_image"
                src="../../images/clothes.jpg"
                alt="Sale"
              />
            </div>
            <div>
              <StaticImage
                className="carousel_image"
                src="../../images/ring.jpg"
                alt="Sale"
              />
            </div>
            <div>
              <StaticImage
                className="carousel_image"
                src="../../images/electronics.jpg"
                alt="Sale"
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
