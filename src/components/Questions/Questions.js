import React,{useState}from 'react';
import './Questions.css'

function Questions(props) {


  const [click,setClick]= useState(false);
  const showAnswer = ()=> setClick(!click);
  

  
 
  return (
    
    <div className='questions' onClick={showAnswer}>
        <h3>{props.questions}</h3>
        {click && <p>{props.answer}</p>}
    </div>
  )
}

export default Questions;