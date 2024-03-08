import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../BaseUrls';
import LandingNavbar from './LandingNavbar';

function DoctorLogin() {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
      });
    
      const navigate=useNavigate()
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleLogin = (e) => {
        console.log(loginData);
        e.preventDefault()
        axiosInstance.post(`/loginDoctor`, loginData)
          .then((result) => {
            console.log("data entered", result);
            if (result.data.status == 200) {
              localStorage.setItem("doctorid", result.data.data._id);
              navigate('/doctor_home')
              alert("login Sucessfully...");
            } else if (result.data.status == 500) {
              alert(result.data.msg)
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
        <LandingNavbar />
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
              required

            />
            <input
              type="password"
              className="mb-3"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required

            />
            {/* <p><Link to='/hospital_forgot_password' >Forgot Password</Link></p> */}
            <div className="user_log_btn">
              <button type="submit" onClick={handleLogin}>Login</button>
            </div>
          </div>
          </form>
          
          <div className="user_log_signup mt-4">
            <p>
              {/* Don't have an account? <Link to="/hospital_registration">Sign up</Link> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorLogin
