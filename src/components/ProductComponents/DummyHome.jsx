import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const nav = [

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
