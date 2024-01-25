import React, { useState } from "react";
import "./UserLogin.css";
import EmptyNavbar from "./EmptyNavbar";
import { Link } from "react-router-dom";
import axiosInstance from "../BaseUrls";

function UserLogin() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    axiosInstance.post(`/loginUser`, loginData)
      .then((result) => {
        console.log("data entered", result);
        if (result.data.status == 200) {
          localStorage.setItem("advertiserid", result.data.data._id);
          alert("login Sucessfully...");
          // window.location.reload(false)
        } else if (result.data.status == 500) {
          // alert(result.data.msg);
          alert("password mismatch")
        }
        else {
          alert(result.data.msg)
        }
      })
      .catch((error) => {
        console.log("error", error);
      });

  };

  return (
    <div>
      <div className="user_log">
        <EmptyNavbar />
        <div className="user_log_box">
          <p className="user_log_box_title mb-5">Login</p>
          <form onSubmit={handleLogin} >
            <div className="user_log_inp_box mt-3">
            <input
              type="email"
              className="mb-3"
              placeholder="Email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              className="mb-3"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
            <p>Forgot Password</p>
            <div className="user_log_btn">
              <button type="submit" onClick={handleLogin}>Login</button>
            </div>
          </div>
          </form>
          
          <div className="user_log_signup mt-4">
            <p>
              Don't have an account? <Link to="/user_registration">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
