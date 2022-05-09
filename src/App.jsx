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
import Productcomp from "./components/ProductComponents/Productcomp";
import Singletodo from "./components/SingleProductCopm/SingleProduct"
import { Cartprod } from "./components/Context";
import { useContext } from "react";
import Imformation from "./pages/Imformation";
import Paymentpage from "./components/Paymentpage";
import { Cartpage } from "./components/Cartcount/Cartpage";


function App() {
  const [cart, setCart] = useContext(Cartprod);

  const onAdd = (prod) => {
    const exsit = cart.find((x) => x.id === prod.id);
    if (exsit) {
      setCart(
        cart.map((x) =>
          x.id === prod.id ? { ...exsit, qty: exsit.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...prod, qty: 1 }]);
    }
  };
  const onRemove = (prod) => {
    const exsit = cart.find((x) => x.id === prod.id);
    if (exsit.qty === 1) {
      setCart(cart.filter((x) => x.id !== prod.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === prod.id ? { ...exsit, qty: exsit.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/signin" element={<Signup />}></Route>
        <Route path="/product" element={<Productcomp />}></Route>
        <Route path="/product/:id" element={<Singletodo />}></Route>
        <Route path="/pay" element={<Paymentpage />}></Route>
        <Route path="/cart" element={<Cartpage />}></Route>
        <Route
          path="/payment"
          element={
            <Imformation onAdd={onAdd} onRemove={onRemove} cart={cart} />
          }
        />
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
