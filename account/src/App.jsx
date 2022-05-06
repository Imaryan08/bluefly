
import './App.css';
import Signup from './pages/Signup';
import {Routes,Route, Router} from "react-router-dom";
import Register from './pages/Register';
import Cart from './pages/Cart';
import {useState} from 'react';
import React from 'react';

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
      
     <Cart/>
    </div>
  );
}

export default App;
