import React from 'react';
import { Products } from '../components/Products';
import { useState } from 'react';
import  Singleprod  from './Singleprod';
import { useContext } from 'react';
import { Cartprod } from '../components/Context';
import Cart from "./Cart";
import "./Cart.css"

export const Home = () => {
 const [show , setShow] = useState(false);
 const [cart , setCart] = useContext(Cartprod)

 const onAdd = (prod) => {
     const exsit = cart.find(x => x.id === prod.id);
     if(exsit){
         setCart(cart.map(x => x.id === prod.id ? {...exsit , qty: exsit.qty+1} : x))
     }else{
         setCart([...cart , {...prod ,qty:1 }])
     }
 }
 const onRemove = (prod) => {
    const exsit = cart.find(x => x.id === prod.id);
    if(exsit.qty === 1 ){
        setCart(cart.filter((x) => x.id !== prod.id));
    }
    else{
        setCart(cart.map(x => x.id === prod.id ? {...exsit , qty: exsit.qty - 1} : x))
    }
 }

  return (
         <div className='prod-container'>
             <button onClick={()=> {setShow(!show)}}>Cart</button>
              {Products.map((product)=>{
                return  <Singleprod onAdd={onAdd} product={product} key={product.id}/>
              })}
              {show? <Cart onAdd={onAdd} onRemove={onRemove} cart={cart}/> : null}
          </div>
    
  )
}

