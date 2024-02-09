import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import { useState } from "react";
import MyFile from "./components/myFile";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import UserRegistration from "./components/UserRegistration";
import EmptyNavbar from "./components/EmptyNavbar";
import UserLogin from "./components/UserLogin";
import UserForgotPassword from "./components/UserForgotPassword";
import LandingNavbar from "./components/LandingNavbar";
import UserNavbar from "./components/UserNavbar";
import UserProfile from "./components/UserProfile";
import HospitalRegistration from "./components/HospitalRegistration";
import HospitalLogin from "./components/HospitalLogin";
import HospitalNavbar from "./components/HospitalNavbar";
import HospitalProfile from "./components/HospitalProfile";
import HospitalForgotPassword from "./components/HospitalForgotPassword";


function App() {

  //image_url
  const url='http://localhost:4005'

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={[<LandingNavbar/>,<MyFile />]} />
        <Route path="/user_registration" element={[<UserRegistration />]} />
        <Route path="/user_login" element={[<UserLogin />]} />
        <Route path="/user_forgot_password" element={[<UserForgotPassword />]} />
        <Route path="/user_home" element={[<UserNavbar/>,<MyFile />]} />
        <Route path="/user_profile" element={[<UserNavbar/>,<UserProfile url={url} />]} />
        <Route path="/hospital_registration" element={[<HospitalRegistration />]} />
        <Route path="/hospital_login" element={[<HospitalLogin />]} />
        <Route path="/hospital_home" element={[<HospitalNavbar/>,<MyFile />]} />
        <Route path="/hospital_profile" element={[<HospitalNavbar/>,<HospitalProfile url={url} />]} />
        <Route path="/hospital_forgot_password" element={[<HospitalForgotPassword />]} />




      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
