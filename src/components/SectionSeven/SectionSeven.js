import React from 'react';
import './SectionSeven.css';
import Questions from '../Questions/Questions';

function SectionSeven() {



  return (
    <div className='sectionSeven'>
      <div className='sectionSeven-container'>
        <div className='sectionSeven-info'>
          <h3 className='sectionSeven-heading'>Our FAQs</h3>
          <h1 className='sectionSeven-title'>Frequently Asked Questions</h1>
          <div className='sectionSeven-questions'>
            <Questions questions='Metus venenatis purus vehicula?' answer='Vivamus mattis commodo faucibus. Etiam semper, qua consequt lacinia, enim lectus sceleris ante, vitae cursus odio eros vel enim. Nam porta risus id dolor vestibulum.'></Questions>
            <Questions questions='Metus venenatis purus vehicula?' answer='Vivamus mattis commodo faucibus. Etiam semper, qua consequt lacinia, enim lectus sceleris ante, vitae cursus odio eros vel enim. Nam porta risus id dolor vestibulum.'></Questions>
            <Questions questions='Metus venenatis purus vehicula?' answer='Vivamus mattis commodo faucibus. Etiam semper, qua consequt lacinia, enim lectus sceleris ante, vitae cursus odio eros vel enim. Nam porta risus id dolor vestibulum.'></Questions>
            <Questions questions='Metus venenatis purus vehicula?' answer='Vivamus mattis commodo faucibus. Etiam semper, qua consequt lacinia, enim lectus sceleris ante, vitae cursus odio eros vel enim. Nam porta risus id dolor vestibulum.'></Questions>

          </div>
        </div>
        <div className='sectionSeven-images'>
          <div className='sectionSeven-img' style={{backgroundImage:' url(/images/img-6.jpg)'}}>
            <h2>We Have 20+ Years of</h2>
            <h3>Experiences for Give You Better Results</h3>
          </div>
          <div className='sectionSeven-img' style={{backgroundImage:' url(/images/img-3.jpg)'}}>
            <h2>213 546 6654</h2>
            <h3>Call us and Get a Free Estimate</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SectionSeven