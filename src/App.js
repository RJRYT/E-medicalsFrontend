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
import UserEditProfile from "./components/UserEditProfile";
import HospitalEditProfile from "./components/HospitalEditProfile";
import LabLogin from "./components/LabLogin";
import LabNavbar from "./components/LabNavbar";
import LabAddTest from "./components/LabAddTest";
import LabViewTests from "./components/LabViewTests";
import LabEditTest from "./components/LabEditTest";
import LandingCarousel from "./components/LandingCarousel";
import LandingServices from "./components/LandingServices";
import LandingProvider from "./components/LandingProvider";
import LandingDownload from "./components/LandingDownload";
import Footer from "./components/Footer";
import UserViewTests from "./components/UserViewTests";
import UserBookTest from "./components/UserBookTest";
import UserPayment from "./components/UserPayment";
import UserViewPendingBookings from "./components/UserViewPendingBookings";
import UserViewApprovedBookings from "./components/UserViewApprovedBookings";
import LabViewTestReq from "./components/LabViewTestReq";
import LabViewTestBooking from "./components/LabViewTestBooking";


function App() {

  //image_url
  const url='http://localhost:4005'

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={[<LandingNavbar/>,<MyFile/>]} />
        <Route path="/user_registration" element={[<UserRegistration />]} />
        <Route path="/user_login" element={[<UserLogin />]} />
        <Route path="/user_forgot_password" element={[<UserForgotPassword />]} />
        <Route path="/user_home" element={[<UserNavbar/>,<MyFile />]} />
        <Route path="/user_profile" element={[<UserNavbar/>,<UserProfile url={url} />]} />
        <Route path="/user_edit_profile" element={[<UserNavbar/>,<UserEditProfile />]} />
        <Route path="/user_view_test" element={[<UserNavbar/>,<UserViewTests />]} />
        <Route path="/user_book_test/:id" element={[<UserNavbar/>,<UserBookTest />]} />
        <Route exact path="/user_payment/:id/:value/:price" element={[<UserNavbar/>,<UserPayment/>]}/>
        <Route exact path="/user_pending_bookings" element={[<UserNavbar/>,<UserViewPendingBookings/>]}/>
        <Route exact path="/user_approved_bookings" element={[<UserNavbar/>,<UserViewApprovedBookings/>]}/>


        <Route path="/hospital_registration" element={[<HospitalRegistration />]} />
        <Route path="/hospital_login" element={[<HospitalLogin />]} />
        <Route path="/hospital_home" element={[<HospitalNavbar/>,<MyFile />]} />
        <Route path="/hospital_profile" element={[<HospitalNavbar/>,<HospitalProfile url={url} />]} />
        <Route path="/hospital_edit_profile" element={[<HospitalNavbar/>,<HospitalEditProfile />]} />
        <Route path="/hospital_forgot_password" element={[<HospitalForgotPassword />]} />


        <Route path="/lab_login" element={[<LabLogin />]} />
        <Route path="/lab_home" element={[<LabNavbar/>,<MyFile />]} />
        <Route path="/lab_add_test" element={[<LabNavbar/>,<LabAddTest />]} />
        <Route path="/lab_view_tests" element={[<LabNavbar/>,<LabViewTests />]} />
        <Route path="/lab_edit_test/:id" element={[<LabNavbar/>,<LabEditTest />]} />
        <Route path="/lab_view_test_rq" element={[<LabNavbar/>,<LabViewTestReq />]} />
        <Route path="/lab_view_test_bookings" element={[<LabNavbar/>,<LabViewTestBooking />]} />


      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
