import React from 'react';
import './SectionTwo.css';
import CardItem from '../CardItem/CardItem';

function SectionTwo() {
  return (
    <div className='sectionTwo' id='sectionTwo'>
      <h2 className='sectionTwo-title'>Our Services</h2>
      <div className='sectionTwo-container'>
        <div className='sectionTwo-wrapper'>
          <ul className='secTwo-items'>
            <CardItem style={{ textAlign: 'center', alignItems: 'center' }} src='/ourServices/battery.png' heading='Lead Production Plant' path='/' text='We recycle and smelts old automotive Lead-Acid batteries (accumulators), Lead Scrap and Lead Concentrate. The maximum Production Capacity of the Plant is up to 4,200 tons per year, which are refined lead and lead alloys.'></CardItem>
            <CardItem style={{ textAlign: 'center', alignItems: 'center' }} src='/ourServices/aluminum.png' heading='Secondary Aluminum Plant' path='/' text='CCALB LTD Albania has invested also in melting and casting equipment in secondary aluminum plant. Total production capacity is about 4800 Ton per year. The main products of the Company are pure aluminum ingot and its alloys as ADC 12. Our secondary aluminum plant recover aluminum from scrap such as beverage cans, foundry returns, other aluminum scrap, and dross.'></CardItem>
          </ul>


        </div>
      </div>
    </div>
  )
}

export default SectionTwo;