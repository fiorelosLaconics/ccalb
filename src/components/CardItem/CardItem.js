import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='secTwo__item' >
        <Link className='secTwo__item__link' to={props.path}>

          <div style={props.style} className='secTwo__item__info'>
            <img style={{ margin: '30px', aspectRatio: "1 / 1" }} width="54" src={props.src} class="attachment-full size-full" alt="" loading="lazy"></img>
            <h3 style={{
              marginBottom: '30px', color: '#131C3B', fontFamily: '"Oswald", Sans-serif', fontSize: '26px',
              fontWeight: '500'
            }}>{props.heading}</h3>
            <p className='secTwo__item__text '>{props.text}</p>
          </div>

        </Link>
      </li>
    </>
  )
}

export default CardItem