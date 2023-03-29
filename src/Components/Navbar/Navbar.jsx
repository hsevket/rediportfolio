import React from "react";
import "./Navbar.scss";

export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={menuOpen ? "navbar active": "navbar"}>
      <div className="wrapper">
        <div >PORTFOLIO PAGE</div>
        
          <div onClick={() => setMenuOpen(!menuOpen)} className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
  );
}
