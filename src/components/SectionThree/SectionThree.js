import React from 'react';
import './SectionThree.css';
import gridDecoration from "../../assets/gridDecoration.png"
import { Link } from 'react-router-dom';

function SectionThree() {
  return (
    <div className='sectionThree' id='sectionThree'>
      <div className='why-chose-us-decoration'></div>
      <div className='sectionThree-container'>
        <div className='sectionThree-info'>
          <h2 className='sectionThree-title1'>What we do</h2>
          <h2 className='sectionThree-title2'> Why choose us</h2>
          <p className='setionThree-text'>Our lead smelter helps recover and recycle a finite resource that is of great importance to modern society, but which can be extremely toxic if not handled in the right way during smelting and recovery.We are customer-focused, quality-centered and environmentally responsible with the health and safety of our employees at the center of everything we do. Our recycling technologies economically recover metals resulting in a significant benefit to the environment and our customers.</p>
          <ul className='secThree-list'>
            <li className='secThree-listItem'>
              We are professional.

            </li>
            <li className='secThree-listItem'>We provide best services for you.</li>

          </ul>
        </div>

        <div className='why-chose-us-img'>
          <img className='secThree-image-decoration1' src={gridDecoration} alt="" />
          <img className='secThree-image-decoration2' src={gridDecoration} alt="" />
          <div className='sectionThree-img' src='images/video-bg-img.jpg' alt='Watch our latest work'>
            <video style={{
            zIndex:"100",
            position: "absolute",
            top: "0px",
            left: "0px",
            objectFit:"contain",
            background: "white"
          }} controls>
              <source src="/videos/VID-20220509-WA0004.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree