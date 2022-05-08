 import React from 'react'
 import styled from 'styled-components';
import "./Cart.css";
import { useNavigate } from 'react-router-dom';




export const Cartdiv = styled.div`
    
     height:655px;
     width:400px;
     top:0px;
     margin-left: 71%;
     position: fixed;
     top: 0;
    bottom: 0;
    padding: 0 15px 15px;
    max-width: 95%;
    z-index: 30;
    background-color: #fff;
    box-shadow: 0 0px 100px 150px #0000001a;
    transition: transform .25s cubic-bezier(.165,.84,.44,1);
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
export const Item = styled.div`
  
    height:340px;
    width:91%;
    margin:17px 17px;
    overflow: scroll;
    overflow-wrap: unset;
    overflow-x: hidden;
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
 
 const Cart = (props) => { 

    const {cart , onAdd , onRemove } = props;
    const itemsPrice = cart.reduce((a,c) => a+ c.price * c.qty ,0);
    const navigate = useNavigate();
  
  
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
       

             <div>{cart.length === 0 && <div>Cart is Empty</div>}</div>
             {cart.map((item)=> (
              <div key={item.id} className="product2" >
            
              <div className="set1">
              <img className='pic1' src={item.img} alt={item.id}/>
              <div className="set2">
              <span>{item.disp}</span>
              <div className="set4">
                  <div className="set5">
                      <img  style={{cursor:"pointer"}} 
                      onClick={()=> onAdd(item)}
                      src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/2x/external-plus-science-education-dreamstale-lineal-dreamstale.png"/>
                      <div className="set6">{item.qty === 0 ? null : item.qty}</div>
                      <img style={{cursor:"pointer"}} 
                      onClick={()=> onRemove(item)}
                      className='pic2'
                      src="https://img.icons8.com/fluency-systems-regular/2x/minus-math.png"/>


                  </div>
                  <p className="total">{item.qty} x {item.price.toFixed(2)}</p>   

              </div>
              </div> 
              </div>
            </div>

             ))}
          
        

        </Item>
        <hr/>
        <Total>
            <p className='sub_total'>SUBTOTAL</p>
            <p className='total'>$ {itemsPrice}</p>
        </Total>
        <div className='sub_des'>Shipping, taxes, and discounts codes calculated at checkout.</div>
        <Button onClick={()=> {navigate("/information")}}>CHECK OUT</Button><br/>


         
     </Cartdiv>
    
   )
 }
 
 export default Cart