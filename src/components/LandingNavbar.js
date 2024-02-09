import React from 'react'
import img1 from "../Assets/trafalgar-header illustration 1(1).png";
import img2 from "../Assets/Frame(1).png";
import img3 from "../Assets/Frame(2).png";
import img4 from "../Assets/Frame(3).png";
import img5 from "../Assets/Frame(4).png";
import img6 from "../Assets/Frame(6).png";
import img7 from "../Assets/Frame.png";
import img8 from "../Assets/trafalgar-illustration sec02 1.png";
import img9 from "../Assets/trafalgar-illustration sec03 1.png";
import { Link } from "react-router-dom";

function LandingNavbar() {

  
  return (
    <div>
       <header id="head">
        <div id="icon">
          <div id="icon1">
            Emed<span id="icon2">ical</span>
          </div>
          {/* <div id="icon2">ical</div> */}
        </div>
        <nav className="nav_login">
          <Link to="/user_login">Login</Link>
        </nav>
      </header>
    </div>
  )
}

export default LandingNavbar
