
import './App.css';
import Signup from './pages/Signup';
import {Routes,Route, Router} from "react-router-dom";
import Register from './pages/Register';
import Cart from './pages/Cart';
import {useState} from 'react';
import React from 'react';
import {Home} from "./pages/Home";
import { useContext } from 'react';
import { Cartprod } from './components/Context';
import Header from './pages/Header';
import Imformation from './pages/Imformation';

function App() {

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
    <div className="App">
       {/* <button onClick={()=> {setShow(!show);}}>Cart</button> */}
       {/* {show ? <Cart/> : null} */}
      
      
      {/* <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes> */}
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path='/information' element={<Imformation onAdd={onAdd} onRemove={onRemove} cart={cart} />}/>
      
        </Routes>
          {/* <Route path='/cart' element={<Cart />}/> */}
          {/* <Imformation/> */}
     
    </div>
  );
}

export default App;
