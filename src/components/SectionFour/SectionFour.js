import React from 'react';
import './SectionFour.css';
import SectionFourItem from './SectionFourItem';

function SectionFour() {
  return (
    <div className='sectionFour' id='sectionFour'>
      <h2 className='sectionFour-title'>Our Process</h2>
      <div className='sectionFour-container'>
        <div className='sectionFour-wrapper'>
          <SectionFourItem style={{ textAlign: 'center' }} src='/iconsProject/car-battery-solid.svg' path='/' text='Lead is extracted from automotive Lead-Acid batteries, Lead scrap and Lead Concentrate.'></SectionFourItem>
          <SectionFourItem style={{ textAlign: 'center' }} src='/iconsProject/uncharted-brands.svg' path='/' text='Battery treatment involves the extraction of acid,cutting in the saw to separate plastic from the lead.'></SectionFourItem>
          <SectionFourItem style={{ textAlign: 'center' }} src='/iconsProject/dumpster-fire-solid.svg' path='/' text='Solid lead is processed  and heated up in the furnace and extracted in 96.6% pure blocks.'></SectionFourItem>
          <SectionFourItem style={{ textAlign: 'center' }} src='/iconsProject/dumpster-fire-solid.svg' path='/' text='Lead blocks are processed in lead ingots in the refining furnace with 99.97% pure lead gain.'></SectionFourItem>
          <SectionFourItem style={{ textAlign: 'center' }} src='/iconsProject/box-solid.svg' path='/' text='In the lead processing sector we also operate with lead oxide as a raw material to obtain lead.'></SectionFourItem>
        </div>
        <div className='sectionFour-wrapper'>
          <SectionFourItem style={{ textAlign: 'center' }} src='/iconsProject/trash-can-solid.svg' path='/' text='Aluminum is recoverd from scrap such as beverage cans, foundry returns and other aluminum scrap.'></SectionFourItem>
          <SectionFourItem style={{ textAlign: 'center' }} src='/iconsProject/uncharted-brands.svg' path='/' text='Selected aluminum is cut or shredded into small pieces to reduce its volume.'></SectionFourItem>
          <SectionFourItem style={{ textAlign: 'center' }} src='/iconsProject/dumpster-fire-solid.svg' path='/' text='Scrap aluminum is loaded into high-temperature, high-capacity furnaces for a 5-hour process.'></SectionFourItem>
          <SectionFourItem style={{ textAlign: 'center' }} src='/iconsProject/soap-solid.svg' path='/' text='To purify the molten metal, various waste products created in the melting process are removed.'></SectionFourItem>
          <SectionFourItem style={{ textAlign: 'center' }} src='/iconsProject/box-solid.svg' path='/' text='Then 86% pure aluminum alloy is created or another off grade alloy with high zinc content.'></SectionFourItem>
        </div>
      </div>
    </div>
  )
}

export default SectionFour;