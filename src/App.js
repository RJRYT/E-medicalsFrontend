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


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<MyFile />} />
        <Route path="/user_registration" element={[<UserRegistration />]} />
        <Route path="/user_login" element={[<UserLogin />]} />
      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
