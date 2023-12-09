import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  let [isChecked, setChecked] = useState(false);

  function handleClick(e) {
    {
      e.preventDefault();
      setChecked(false);
    }
  }

  return (
    <div className="navbar">
      {window.addEventListener("resize", () => {
        setChecked(false);
      })}
      <div className="classic-navbar">
        <div className="main-logo">
          <img
            src="media/logo.png"
            alt=""
            className="logo"
            width="30"
            height="30"
          />
        </div>
        <div className="navbar-links">
          <a href="#" onClick={handleClick} className="desktop-navbar-li">
            Portfolio
          </a>
          <a href="#" onClick={handleClick} className="desktop-navbar-li">
            Contact
          </a>
        </div>
        <div className="social-media">
          <img
            src="media/gh.png"
            className="logo gh"
            width="30"
            height="30"
            alt="github"
          />
          <img
            src="media/in.png"
            alt="linkedin"
            className="logo in"
            width="30"
            height="30"
          />
        </div>
      </div>
      <div className="burger">
        <input
          type="checkbox"
          id="menu-toggle"
          onChange={() => {
            setChecked(!isChecked);
          }}
          checked={isChecked}
        />
        <label id="trigger" htmlFor="menu-toggle"></label>
        <label id="burger" htmlFor="menu-toggle"></label>
        <ul id="menu">
          <li>
            <a href="#" onClick={handleClick}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
