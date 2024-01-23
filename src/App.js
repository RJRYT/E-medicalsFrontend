import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import { useState } from "react";
import MyFile from "./components/myFile";
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<MyFile />} />
      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
