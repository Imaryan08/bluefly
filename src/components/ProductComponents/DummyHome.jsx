import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { AuthContext } from "../context/AuthContext";

const Home = () => {
  // const { login, isAuth } = useContext(AuthContext);
  const nav = [
    { title: "Home", to: "/" },
    { title: "Product", to: "/product" },
  ];

  return (
    <div className="navbar">
      {nav.map((e, i) => (
        <h2>
          <Link to={e.to} key={e.title}>
            {e.title}
          </Link>
        </h2>
      ))}
    </div>
  );
};

export default Home;
