import React from 'react'
import styled from 'styled-components';
import { slideData } from '../components/SlideData';
import { useState,useEffect } from 'react';
import "./Signup.css";
import { BelowData } from '../components/BelowData';
import {useNavigate} from "react-router-dom";



export const Container = styled.div`
  
    width:100%;
    background-color: black;
    color:white;
   text-align: center;
   padding: 1px ;
`
export const Heading = styled.h1`
    font-family: Tiemann ,serif;
    font-weight: 500;
    letter-spacing: 0em;
    line-height: 1;
    font-size: 37px;
    text-transform: uppercase;
    display: block;
    margin: 19px;
    margin-left: 46%;
    
`
 export const Inputitem = styled.div`
 
  height:310px;
  width:450px;
  margin-top: 40px;
  margin-left: 34%;
`
export const Button = styled.button`
    height:45px;
    width:99%;
    margin-top: 7%;
    padding: 8px 10px;
    background-color: black;
    letter-spacing: 0.35em;
    color:white;
    font-weight: bolder;
    cursor: pointer;
`
export const Create = styled.p`
   font-size: 15.8px;
   padding-top:3px;
   padding-left: 38.4%;
   cursor: pointer;
`
export const Offer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap:7px;
  margin-top: 25px;
  text-align: center;
  margin-bottom: 50px;
  
`

const Signup = () => {
  const [currentSlide , setCurrentSlide] = useState(0);
  const slideLength = slideData.length;
  let navigate = useNavigate();

  const [final,setFinal] = useState({
    mail:"",
    password:""
  });

  const handleChange = (e)=> {
     setFinal({
       ...final,[e.target.id]:e.target.value
     });
  }
  const handleAuth =(e)=> {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem ("auth"));
    if(final.mail == "" || final.password==""){
      alert("please fill all details..")
    }
    else if(data.email === final.mail && data.pass === final.password){
      navigate("/")
    }else{
      alert("Invalid Email and Password");
    }
  }
 
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
    <div className='login-page'>
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
    <Heading>LOGIN</Heading>
    <Inputitem>
    <div>
    <label className='l1'>EMAIL</label>
     <br/>
     <input type="text" className='input1' id="mail" onChange={(e)=> {handleChange(e)}}/>

    </div>
    <div  className='pass'>
    <label className='l1'>PASSWORD</label>
    <label className='l1'>Forgot password?</label>
    </div>
    
     <input type="text" className='input1' id="password" onChange={(e)=> {handleChange(e)}}/>

     <Button onClick={(e)=> {handleAuth(e)}}>SIGN IN</Button><br/>
     <Create onClick={()=> {navigate("/register")}}>Create account</Create>

    </Inputitem>
    <hr/>
    <Offer>
      {BelowData.map((elem) => {
        return(
          <div key={elem.id}>
              <img src={elem.image} className="pics" style={{cursor: "pointer"}}/>
              <p className='p1'>{elem.disp}</p>
              <p>{elem.short}</p>
              <button className='btn-modi' style={{cursor: "pointer"}} >{elem.btn}</button>
          </div>
         
        )
      })}

    </Offer>
   
    </div>
  )
}

export default Signup