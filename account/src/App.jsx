
import './App.css';
import Signup from './pages/Signup';
import {Routes,Route, Router} from "react-router-dom";
import Register from './pages/Register';
import Cart from './pages/Cart';
import {useState} from 'react';
import React from 'react';
import {Home} from "./pages/Home";
import Header from './pages/Header';
import Imformation from './pages/Imformation';

function App() {

  const [show , setShow] = useState(false);

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
        <Route path='/information' element={<Imformation />}/>
      
        </Routes>
          {/* <Route path='/cart' element={<Cart />}/> */}
          {/* <Imformation/> */}
     
    </div>
  );
}

export default App;
