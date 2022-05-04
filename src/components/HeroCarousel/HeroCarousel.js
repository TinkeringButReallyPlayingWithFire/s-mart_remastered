import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { container, carousel_body, videoBody } from "./HeroCarousel.module.css";
import shoppingEcommerce from "../../images/shopping.mp4";

export default class HeroCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 19000,
    };
    return (
      <div className={carousel_body}>
        <div className={container}>
          <Slider {...settings}>
            <div class=" carousel_image parallax-window" data-parallax="scroll">
              <video className={videoBody} preload="auto" loop autoPlay muted>
                <source src={shoppingEcommerce} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
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
