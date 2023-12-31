import React from 'react';
import CardItem from '../CardItem/CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC DESTINATIONS</h1>
        <div className='cards__container'>
            <div className='cards__wrapper '>
                <ul className='cards__items'>
                <CardItem
                src='images/img-9.jpg'
                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                label='Adventure'
                path='/services'>

                </CardItem>
                <CardItem
                src='images/img-2.jpg'
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/services'>

                </CardItem>

                </ul>
                <ul className='cards__items'>
                <CardItem
                src='images/img-3.jpg'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/services'>

                </CardItem>
                <CardItem
                src='images/img-4.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/services'>
                    
                </CardItem>
                <CardItem
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a giuded camel toura'
                label='Adrenaline'
                path='/sign-up'>
                    
                </CardItem>

                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Cards