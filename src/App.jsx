import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import '../footer/footer';
import "../footer/footer.css";
import { Route, Routes } from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import { Home } from "./components/Home";
import { Footer} from "./Footer"


function App() {
  

  return (
    <div className="App">
        
        <div>
          <Navbar />
        </div>
      
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default App
