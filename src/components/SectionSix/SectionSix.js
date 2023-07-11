import React from "react";
import "./SectionSix.css";
import { Link } from "react-router-dom";
import gridDecoration from "../../assets/gridDecoration.png";
import SectionSixCard from "./SectionSixCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { scrollAnimation } from "../../utils/scrollAnimation";

function SectionSix() {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,

    arrows: false

  };
  return (
    <div className="sectionSix" id="sectionSix">
      <div className="sectionSix-container">
        <div className="sectionSix-card-wrapper">
          <img
            className="SectionSix-image-decoration1"
            src={gridDecoration}
            alt=""
          />
          <img
            className="SectionSix-image-decoration2"
            src={gridDecoration}
            alt=""
          />
          <div class="feedBackCard">
            <Slider {...settings}>
              <SectionSixCard
                title="Emilpress"
                subtitle=""
                content="With high quality products and professionalism, reliability, passion and high specialization of CCALB team as their competitive advantage, we have  established strong collaboration ties ."
                photo="/feedBack/emailPress.png"
              />
              <SectionSixCard
                title="System Sunlight"
                subtitle="  "
                content="CCALB has customers at the heart of its strategic priorities The results speak for themselves: solutions that are custom-crafted with precision and that meet and exceed international standards."
                photo="/feedBack/sunLight.png"
              />
            </Slider>
          </div>
        </div>
        <div className="sectionSix-gap"></div>

        <div className="sectionSix-info">
          <h2 className="sectionSix-heading">Our Happy Clients</h2>
          <h2 className="sectionSix-title"> Say’s About Us</h2>
          <p className="sectionSix-text">
          Clients can rely on us when it is pertaining to the quality of the products that we offer. Due to our excellence in bringing forth the best products at the most reasonable prices, we have been able to earn the trust of a number of clients.
          </p>
          <div to="/contact">
            <button onClick={()=>scrollAnimation(document.getElementById("form-section"),true)} className="sectionSix-button">CONTACT US</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
