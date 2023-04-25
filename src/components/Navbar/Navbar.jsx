import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
export const Navbar = () => {
  return (
    <div className="nav">
      <div className="wrapper">
        <div className="left">
          <div className="title">Plants & Home</div>
          <Link className="link" to="/">
            Plants
          </Link>
          <Link className="link" to="/">
            Seed
          </Link>
          <Link className="link" to="/">
            Plant care
          </Link>
          <Link className="link" to="/">
            Pots
          </Link>
        </div>
        <div className="right">
          <div className="search">
            <input type="text" />
          </div>

          <div className="user"></div>
          <div className="cart"></div>
        </div>
      </div>
    </div>
  );
};
