import React from "react";
import "../styles/header.css";
import logo from "../images/logo.jpg";

function Head() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo"></img>
        <div className="logo-text">
          <p>
            Logis<span>tcwr</span>
          </p>
          <h5>logistics Service</h5>
        </div>
      </div>
      <div className="header-menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>News</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="header-right">
        <span>
          <i class="fa-solid fa-phone-volume fa-xl"></i>
        </span>
        <div className="header-right-text">
          <p>Emargency</p>
          <p>+56 (201) 555-0124</p>
        </div>
      </div>
    </div>
  );
}
export default Head;
