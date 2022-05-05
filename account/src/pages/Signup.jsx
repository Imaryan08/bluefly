import React from 'react'
import styled from 'styled-components';
import { slideData } from '../components/SlideData';
import { useState,useEffect } from 'react';
import "./Signup.css";


const Container = styled.div`
  
    width:100%;
    background-color: black;
    color:white;
   text-align: center;
   padding: 1px ;
`

const Signup = () => {
  const [currentSlide , setCurrentSlide] = useState(0);
  const slideLength = slideData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 4000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength-1 ? 0 : currentSlide+1);
  }

  function auto() {
    slideInterval = setInterval(nextSlide,intervalTime);
  }
 useEffect(()=> {
   if(autoScroll){
     auto();
   }
   return () => clearInterval(slideInterval);

 },[currentSlide])

  return (
    <Container className='slide'>
      {slideData.map((slide,index) => {
        return (
          <div key={index} >
            {index===currentSlide && (
              <>
              <p className='item'>{slide.title}</p>
              </>
            )}

          </div>
         
        )
      })}
    </Container>
  )
}

export default Signup