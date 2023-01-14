import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return(
    <div className="navbar">
      <div className="navbar-title-container">
        <h2 className="navbar-title">HenryGames</h2>
      </div>
      <div className="navbar-menu">
        <div className="navbar-link-container">
          <Link to="/home/page-1" className="navbar-link">
            <div className="navbar-button">Home</div>
          </Link>
        </div>
        <div className="navbar-link-container">
          <Link to="/new-game" className="navbar-link">
            <div className="navbar-button">New Game</div>
          </Link>
        </div>
        <div className="navbar-link-container">
          <Link to="/about" className="navbar-link">
            <div className="navbar-button">About</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;