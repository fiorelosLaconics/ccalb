import React from 'react';
import './SectionOne.css';
import{Link} from 'react-router-dom';
import gridDecoration from "../../assets/gridDecoration.png"
import buildBetter from "./builder-batter-left-small.jpg"

function SectionOne() {
  return (
    <div className="sectionOne" id='sectionOne'>
      <div className='sectionOne-container'>
        <div className='sectionOne-images'>
            <img className='sectionOne-img' src='/sectionIntroPhotos/machinery.png' alt="" width='530' height='570'></img>
            <img className='sectionOne-image-decoration1' src={gridDecoration} alt="" />
            <img className='sectionOne-image-decoration2' src={gridDecoration} alt="" />
            <div className='hover-content'>
<img className='hover-content-image' src={"/sectionIntroPhotos/metals.png"} alt="" />
{/* <div className='hover-content-read-more'>Read More</div> */}
            </div>
        </div>
        <div className='sectionOne-text'>
            <h2 className='sectionOne-heading1'>We will provide</h2>
            <h2 className='sectionOne-heading2'>the best.</h2>
            <p className='sectionOne-info'>Our Recycling Technologies Economically Recover Metals.</p>
           <p className='sectionOne-description'>CCALB LTD Albania, founded in 2017, registered with identification number NUIS L71710020N and its address Kombinati Metalurgjik, Objekti Nr. 45, Elbasan, Albania, is a company which recycles and smelts old automotive Lead-Acid batteries (accumulators), Lead Scrap and Lead Concentrate. The maximum Production Capacity of the Plant is up to 4,200 tons per year, which are refined lead and lead alloys. CCALB LTD Albania has invested also in melting and casting equipment in secondary aluminum plant. Total production capacity is about 4800 Ton per year. The main products of the Company are pure aluminum ingot and its alloys as ADC 12.</p>
          <Link to="/sign-up">
          {/* <button  className='sectionOne-button'>READ MORE</button> */}
          </Link>
        </div>
    </div>
    </div>
  )
}

export default SectionOne;