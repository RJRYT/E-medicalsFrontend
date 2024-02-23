import React from "react";
import Logo from "../Assets/img/logo.png";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div>
      <nav className="rjr_container rjr_flex rjr_nav justify-content-between">
        <div className="rjr_nav-logo ">
          <a className="rjr_a" href="#">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="rjr_nav-links rjr_flex">
          <Link to="/admin_home" className="rjr_a ">
            Home
          </Link>
         
          <div class="nav-item dropdown">
            <Link
              href="#"
              class=" dropdown-toggle rjr_a"
              data-bs-toggle="dropdown"
            >
              View
            </Link>
            <div class="dropdown-menu rounded-0 m-0">
              <Link to="/admin_view_doctors" class="dropdown-item">
                Doctors
              </Link>
              <Link to="/admin_view_tests" class="dropdown-item">
                Tests
              </Link>
            </div>
          </div>
          <Link to="/" className="rjr_a ">
            Logout
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavbar;
