import React, { useState } from 'react'
import "./PhotoSection.css"
import PhotoSlider from './PhotoSlider'

const PhotoSection = () => {
  const [photoKlicked, setPhotoKlicked] = useState("/photosDisplay/4.png")
  return (
    <div className='photoSectionContainer'>
      <div className='PhotoSection'>
        <div className='PhotoSectionLeft'>
          <div className='PhotoSectionTitleContainer'>
            <div className='PhotoSectionTitleDecoration1' />
            <div className='PhotoSectionTitleDecoration2' />
            <h1 className='PhotoSectionTitle'>A GLIMPSE INSIDE OUR LAB</h1>
          </div>
          <div className='PhotoSectionContentContainer'>
            <p className='PhotoSectionContent'>Our team regularly inspects the product after each stage of lead and aluminum production which helps us to avoid any mistakes in our work process.After all the phases of lead and aluminium processing are completed, the final product undergoes quality checks and sample tests in the lab to make sure products purity meets company's standarts.</p>
            {/* <a href='' className='PhotoSectionButton'>click here</a> */}
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
          <div className='PhotoSectionSlider'>
            <PhotoSlider handelPhotoKlick={setPhotoKlicked} />
          </div>
        </div>
        <div className='PhotoSectionRight'>
          <img className='PhotoSectionImage' src={photoKlicked} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PhotoSection