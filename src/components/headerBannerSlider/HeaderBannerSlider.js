import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from '../HeroSection/HeroSection';
import "./headerBanner.css"
const HeaderBannerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        fade: true,
        arrows: false

    };
    return (
        <div className='sliderHeader'>
            <Slider {...settings}>
                <HeroSection background={"/heder/recycle.jpg"} />
                <HeroSection background={"/heder/img-home.png"} />
                <HeroSection background={"/heder/metal aluminium.png"} />
                <HeroSection background={"/heder/metal red.png"} />
            </Slider>
        </div>
    )
}

export default HeaderBannerSlider