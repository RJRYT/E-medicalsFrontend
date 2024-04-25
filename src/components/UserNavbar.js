import React from "react";
import "./UserNavbar.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/img/logo.png";

function UserNavbar() {
  return (
    <div>
      {/* <div className='empty_navbar' >
        <div className='container d-flex justify-content-between'>
            <div className='empty_navbar_logo' >
                <p className='empty_navbar_logo_title1' >EMED<span className='empty_navbar_logo_title2' >icals</span></p>
            </div>
            <div className='user_nav_content'>
            <Link to='/user_home' >Home</Link>

               <Link to='/user_profile' >Profile</Link>
            </div>
        </div>
      </div> */}
      <nav className="rjr_container rjr_flex rjr_nav justify-content-between">
        <div className="rjr_nav-logo ">
          <a className="rjr_a" href="#">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="rjr_nav-links rjr_flex">
          <Link to="/user_home" className="rjr_a ">
            Home
          </Link>
          
          <div class="nav-item dropdown">
            <Link
              href="#"
              class="dropdown-toggle rjr_a"
              data-bs-toggle="dropdown"
            >
              Services
            </Link>
            <div class="dropdown-menu rounded-0 m-0">
              <Link to="/user_view_hospital" class="dropdown-item">
                Doctor Consultation
              </Link>
              <Link to="/user_view_test" class="dropdown-item">
                Lab Test
              </Link>
            </div>
          </div>
          <div class="nav-item dropdown">
            <Link
              href="#"
              class="dropdown-toggle rjr_a"
              data-bs-toggle="dropdown"
            >
              Bookings
            </Link>
            <div class="dropdown-menu rounded-0 m-0">
              {/* <Link to="/user_approved_bookings" class="dropdown-item">
                Approved Bookings
              </Link> */}
              <Link to="/user_pending_bookings" class="dropdown-item">
                Lab
              </Link>
              <Link to="/user_view_appointment/today" class="dropdown-item">
                Doctor
              </Link>
            </div>
          </div>
          <Link to="/user_prescriptions" className="rjr_a ">
            Prescriptions
          </Link>
          <Link to="/user_profile" className="rjr_a ">
            Profile
          </Link>

          {/* <a className="rjr_a" href="#">About</a>
        <a className="rjr_a" href="#">Contact Us</a>
        <a className="rjr_a" href="#">Sign Up</a>
        <a className="rjr_a" href="#">Sign In</a> */}
        </div>
      </nav>
    </div>
  );
}

export default UserNavbar;
