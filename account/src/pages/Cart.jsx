 import React from 'react'
 import styled from 'styled-components';
import "./Cart.css";
import { useState } from 'react';



export const Cartdiv = styled.div`
     border:1px solid red;
     height:655px;
     width:400px;
     margin-left: 71.6%;
 `
 const Heading = styled.h1`
 font-family: Tiemann ,serif;
 font-weight: 500;
 letter-spacing: 0em;
 line-height: 1;
 font-size: 37px;
 text-transform: uppercase;
 display: block;
 margin: 19px;
 margin-left: 6%;
 
`
const Item = styled.div`
    border:1px solid blue;
    height:340px;
    width:91%;
    margin:17px 17px;
`
const Total = styled.div`
    display:flex;
    justify-content: space-between;
    width:88%;
    margin-left: 19px;
` 
const Button = styled.button`
height:45px;
width:88%;
margin-top: 3%;
padding: 8px 10px;
background-color: black;
letter-spacing: 0.35em;
color:white;
font-weight: bolder;
cursor: pointer;
margin-left: 21px;
`
 
 const Cart = () => { 

  
  function handleChange(){
    
        document.querySelector(".cart-page").style.display="none";

  }

   return (
    
     <Cartdiv className='cart-page'>
        <div className='row'>
        <Heading>CART</Heading>
        <img style ={{ height:"20px",width:"20px",margin:"26px",cursor:"pointer"}} onClick={()=> {handleChange()}} src="https://img.icons8.com/fluency-systems-regular/1x/delete-sign.png"/>

        </div>
        <hr/>
        <Item>

        </Item>
        <hr/>
        <Total>
            <p className='sub_total'>SUBTOTAL</p>
            <p className='total'>$ 949.99</p>
        </Total>
        <div className='sub_des'>Shipping, taxes, and discounts codes calculated at checkout.</div>
        <Button>CHECK OUT</Button><br/>


         
     </Cartdiv>
    
   )
 }
 
 export default Cart