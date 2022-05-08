import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./footer.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Footers } from "./components/Footer";
import Register from "./pages/Register";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/signin" element={<Signup />}></Route>
      </Routes>

      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />
        <Footers />
      </div>
    </div>
  );
}

export default App;
