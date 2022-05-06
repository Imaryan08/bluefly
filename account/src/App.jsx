
import './App.css';
import Signup from './pages/Signup';
import {Routes,Route, Router} from "react-router-dom";
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      
     
    </div>
  );
}

export default App;
