import React from 'react'
import './advice.css'
import { useState ,useEffect} from 'react';

function Advice() {

  const[adviceText, setAdviceText] = useState({});

  const [isClicked, setIsClicked] = useState(false); 

  const handleClick= ()=>{
    setIsClicked((prevState)=>!prevState);
  }

  useEffect(()=>{
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data=>{setAdviceText(data.slip)})
  },[isClicked])

  return (
    <div className="parent">
      <div className='child1'><h1>ADVICE #{adviceText.id}</h1></div>
      <div className="child2">"{adviceText.advice}"</div>
      <button className='child3' aria-label="nextbtn" aria-labelledby="labelnext" value={""} role="button"><img src="/images/icon-dice.svg" className='btn' alt="" onClick={handleClick} /></button>
      <div className="child4"  ><img src="/images/pattern-divider-desktop.svg" className='divider' alt="" /></div>
      

    </div>
  )
}

export default Advice