import React from 'react';
import { Container , Offer  } from './Signup';
import { useState, useEffect } from 'react';
import "./Signup.css";
import { slideData } from '../components/SlideData';
import styled from 'styled-components';
import { BelowData } from '../components/BelowData';
import { useNavigate } from 'react-router-dom';

const Heading = styled.h1`
   font-family: Tiemann ,serif;
    font-weight: 500;
    letter-spacing: 0em;
    line-height: 1;
    font-size: 37px;
    text-transform: uppercase;
    display: block;
    margin: 19px;
    margin-left: 38%;
`
const Sub = styled.div`
display: flex;
text-align: center;
margin-top: 20px;
`
const Button = styled.button`
    height:45px;
    width:99%;
    margin-top: 1%;
    padding: 8px 10px;
    background-color: black;
    letter-spacing: 0.35em;
    color:white;
    font-weight: bolder;
    cursor: pointer;
`
const Inputitem = styled.div`

  height:560px;
  width:450px;
  margin-top: 40px;
  margin-left: 34%;
`



const Register = () => {
  const [currentSlide , setCurrentSlide] = useState(0);
  const [check, setCheck] = useState({
    email: "",
    pass: "",
  });

  const slideLength = slideData.length;
  let navigate = useNavigate();

  const handleChange = (e) => {
    setCheck({
      ...check,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (check.email === "" || check.pass === "") {
      alert("Please fill all details...");
    } else {
      //console.log(check);
      localStorage.setItem("auth", JSON.stringify(check));
      navigate("/signin");
    }
  };

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
    <div className="register-page">
      <Container className="slide">
        {slideData.map((slide, index) => {
          return (
            <div key={index}>
              {index === currentSlide && (
                <>
                  <p className="item">{slide.title}</p>
                </>
              )}
            </div>
          );
        })}
      </Container>
      <Heading>CREATE ACCOUNT</Heading>
      <Inputitem>
        <div>
          <label className="l1" style={{ marginLeft: "-380px" }}>
            FIRST NAME
          </label>
          <br />
          <input type="text" className="input1" />
        </div>
        <div className="pass">
          <label className="l1">LAST NAME</label>
        </div>

        <input type="text" className="input1" />

        <div className="wap">
          <label className="l1" style={{ marginLeft: "-410px" }}>
            EMAIL
          </label>
          <br />
          <input
            type="email"
            className="input1"
            id="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="pass1">
          <label className="l1">PASSWORD</label>
        </div>

        <input
          type="password"
          className="input1"
          id="pass"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Sub>
          <input type="checkbox" id="cb" />
          <p style={{ marginTop: "16px" }}>
            Subscribe to stay updated with new offers!
          </p>
        </Sub>
        <Button
          onClick={() => {
            navigate("/signin");
          }}
        >
          CREATE
        </Button>
        <br />
      </Inputitem>
      <hr />
      {/* <Offer>
      {BelowData.map((elem) => {
        return(
          <div key={elem.id}>
              <img src={elem.image} className="pics" style={{cursor: "pointer"}}/>
              <p className='p1'>{elem.disp}</p>
              <p>{elem.short}</p>
              <button className='btn-modi' style={{cursor: "pointer"}}>{elem.btn}</button>
          </div>
         
        )
      })}

    </Offer> */}
    </div>
  );
}

export default Register