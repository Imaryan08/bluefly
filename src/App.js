
import './App.css';
import Productcomp from './components/ProductComponents/Productcomp';
import { Route, Routes } from "react-router-dom";
import Home from "./components/ProductComponents/DummyHome";
import Singletodo from './components/ProductComponents/SingleProduct';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Productcomp />}></Route>

          <Route path="/product/:id" element={<Singletodo />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
