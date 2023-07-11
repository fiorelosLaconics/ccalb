import React, { useState } from 'react'
import Slider from 'react-slick/lib/slider';
import "./PhotoSlider.css"
import "./photoAnimations.css"
import { timeout } from '../../utils/timeout';



const photoData = [
    "/photosDisplay/1.png",
    "/photosDisplay/2.png",
    "/photosDisplay/3.png",
    "/photosDisplay/4.png",
    "/photosDisplay/5.png",
]


const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return <div
        className={`${className} prevArrow`}
        style={{ ...style, display: "block", position: 'relative', bottom: "0px" }}
        onClick={onClick}
    >Prev</div>
}


const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return <div
        className={`${className} nextArrow`}
        style={{ ...style, display: "block", position: 'relative', bottom: "0px" }}
        onClick={onClick}
    >Next</div>
}
const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
    ]
};




const PhotoPart = (props) => {
    const { handelPhotoKlick, photo } = props
    const [onHover, setOnHover] = useState(false)
    const [isUnmounting, setIsUnmounting] = useState(false)


    const handelUnmount = async () => {
        setIsUnmounting(true)
        await timeout(400)
        setOnHover(false)
        setIsUnmounting(false)
    }

    return (
        <div onClick={() => handelPhotoKlick(photo)} onMouseEnter={() => setOnHover(true)} onMouseLeave={handelUnmount} className='PhotoSectionImageContainer'>
            {onHover &&
                <div className={` PhotoSectionImageBackDrop ${isUnmounting ? "PhotoSectionImageBackDropUnmount" : "PhotoSectionImageBackDrop"}`}>
                    <img src="/decoraton/arrow-right-long-solid.svg" className={`${isUnmounting ? "handelPhotoArrowDecorationUnmount" : "PhotoArrowDecoration"}`} alt="" />
                </div>
            }
            <img className='PhotoSectionSliderImage' src={photo} />
        </div>
    )
}

const PhotoSlider = (props) => {
    const { handelPhotoKlick } = props

    return (
        <div className='PhotoSectionSliderContainer'>
            <Slider {...settings}>
                {
                    photoData.map(n =>
                        <PhotoPart handelPhotoKlick={handelPhotoKlick} photo={n} />
                    )
                }
            </Slider >
        </div >
    )
}

export default PhotoSlider