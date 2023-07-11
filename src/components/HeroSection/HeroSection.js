import React from 'react';
import '../../App.css';
import { scrollAnimation } from '../../utils/scrollAnimation';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection({ background }) {
  return (
    <div className='hero-container'
      style={{
        position: "relative"
      }}
    >
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted></video> */}
      <img




        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "unset",
          zIndex: -1
        }}
        className="heroBackgroundImage"
        src={background} alt="" srcset="" />
      <h1>RECYCLING PLANT</h1>
      <p>Lead And Aluminum</p>
      <div className='hero-btns'>
        <Button className='btns' onClick={() => scrollAnimation(document.getElementById("sectionOne"), true)} buttonStyle='btn--outline' buttonSize='btn--large'>
          See More
        </Button>
      </div>
    </div>
  )
}

export default HeroSection