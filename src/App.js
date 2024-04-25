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
import LabAddResult from "./components/LabAddResult";
import LabViewResults from "./components/LabViewResults";
import UserViewResult from "./components/UserViewResult";
import HospitalAddDoctor from "./components/HospitalAddDoctor";
import HospitalViewDoctors from "./components/HospitalViewDoctors";
import HospitalEdtDoctorProfile from "./components/HospitalEdtDoctorProfile";
import AdminLogin from "./components/AdminLogin";
import AdminHome from "./components/AdminHome";
import AdminNavbar from "./components/AdminNavbar";
import AdminViewDoctors from "./components/AdminViewDoctors";
import AdminViewTests from "./components/AdminViewTests";
import UserHome from "./components/UserHome";
import HospitalHome from "./components/HospitalHome";
import Labhome from "./components/Labhome";
import UserViewDoctors from "./components/UserViewDoctors";
import UserViewHospitals from "./components/UserViewHospitals";
import UserBookAppointment from "./components/UserBookAppointment";
import PharmacyLogin from "./components/PharmacyLogin";
import PharmacyNavbar from "./components/PharmacyNavbar";
import PharmacyHome from "./components/PharmacyHome";
import PharmacyAddMedicine from "./components/PharmacyAddMedicine";
import PharmacyViewMedicines from "./components/PharmacyViewMwdicines";
import DoctorLogin from "./components/DoctorLogin";
import DoctorNavbar from "./components/DoctorNavbar";
import DoctorHome from "./components/DoctorHome";
import DoctorProfile from "./components/DoctorProfile";
import DoctorViewAppointments from "./components/DoctorViewAppointments";
import UserViewAppointments from "./components/UserViewAppointments";
import DoctorViewPatientDetails from "./components/DoctorViewPatientDetails";
import DoctorViewUserTestDetails from "./components/DoctorViewUserTestDetails";
import DoctorAddPrescription from "./components/DoctorAddPrescription";
import DoctorViewPatientPrescription from "./components/DoctorViewPatientPrescription";
import UserViewPrescription from "./components/UserViewPrescription";
import DoctorViewPriscriptions from "./components/DoctorViewPriscriptions";
import UserPrescriptions from "./components/UserPrescriptions";
import PharmacyViewPrescriptionReq from "./components/PharmacyViewPrescriptionReq";
import UserViewBookings from "./components/UserViewBookings";
import UserViewAvailableMedByPharmacy from "./components/UserViewAvailableMedByPharmacy";
import UserViewInvoice from "./components/UserViewInvoice";
import PharmacyViewInvoice from "./components/PharmacyViewInvoice";
import AdminViewHospitals from "./components/AdminViewHospitals";
import AdminDashboard from "./components/AdminDashboard";
import AdminViewHospitalReq from "./components/AdminViewHospitalReq";


function App() {

  //image_url_local
  const url='http://localhost:4005' 

  //image_url_server
  // const url='http://hybrid.srishticampus.in:4005/'

  return (
    <BrowserRouter basename="emedicals" >
    <div>
      <Routes>
        <Route path="/" element={[<LandingNavbar/>,<MyFile/>]} />
        <Route path="/user_registration" element={[<UserRegistration />]} />
        <Route path="/user_login" element={[<UserLogin />]} />
        <Route path="/user_forgot_password" element={[<UserForgotPassword />]} />
        <Route path="/user_home" element={[<UserNavbar/>,<UserHome />]} />
        <Route path="/user_profile" element={[<UserNavbar/>,<UserProfile url={url} />]} />
        <Route path="/user_edit_profile" element={[<UserNavbar/>,<UserEditProfile />]} />
        <Route path="/user_view_test" element={[<UserNavbar/>,<UserViewTests />]} />
        <Route path="/user_book_test/:id" element={[<UserNavbar/>,<UserBookTest />]} />
        <Route path="/user_payment/:id/:value/:price" element={[<UserNavbar/>,<UserPayment/>]}/>
        <Route path="/user_pending_bookings" element={[<UserNavbar/>,<UserViewBookings data='pending' />]}/>
        <Route path="/user_approved_bookings" element={[<UserNavbar/>,<UserViewBookings data='approved'/>]}/>
        <Route path="/user_view_result/:id" element={[<UserNavbar/>,<UserViewResult/>]}/>
        <Route path="/user_view_hospital" element={[<UserNavbar/>,<UserViewHospitals url={url} />]}/>
        <Route path="/user_view_doctors/:id" element={[<UserNavbar/>,<UserViewDoctors url={url} />]}/>
        <Route path="/user_take_appointment/:id" element={[<UserNavbar/>,<UserBookAppointment url={url} />]}/>
        <Route path="/user_view_appointment/today" element={[<UserNavbar/>,<UserViewAppointments data='today' />]}/>
        <Route path="/user_view_appointment/upcoming" element={[<UserNavbar/>,<UserViewAppointments data='upcoming' />]}/>
        <Route path="/user_view_appointment/dateover" element={[<UserNavbar/>,<UserViewAppointments data='dateover' />]}/>
        <Route path="/user_prescriptions" element={[<UserNavbar/>,<UserPrescriptions />]}/>
        <Route path="/user_view_prescription/:id" element={[<UserNavbar/>,<UserViewPrescription />]}/>
        <Route path="/user_view_available_med_by_pharmacy" element={[<UserNavbar/>,<UserViewAvailableMedByPharmacy />]}/>
        <Route path="/user_view_invoice/:id" element={[<UserNavbar/>,<UserViewInvoice />]}/>


        <Route path="/hospital_registration" element={[<HospitalRegistration />]} />
        <Route path="/hospital_login" element={[<HospitalLogin />]} />
        <Route path="/hospital_home" element={[<HospitalNavbar/>,<HospitalHome />]} />
        <Route path="/hospital_profile" element={[<HospitalNavbar/>,<HospitalProfile url={url} />]} />
        <Route path="/hospital_edit_profile" element={[<HospitalNavbar/>,<HospitalEditProfile />]} />
        <Route path="/hospital_forgot_password" element={[<HospitalForgotPassword />]} />
        <Route path="/hospital_add_doctor" element={[<HospitalNavbar/>,<HospitalAddDoctor />]} />
        <Route path="/hospital_view_doctors" element={[<HospitalNavbar/>,<HospitalViewDoctors url={url} />]} />
        <Route path="/hospital_edit_doctor/:id" element={[<HospitalNavbar/>,<HospitalEdtDoctorProfile url={url} />]} />


        <Route path="/lab_login" element={[<LabLogin />]} />
        <Route path="/lab_home" element={[<LabNavbar/>,<Labhome />]} />
        <Route path="/lab_add_test" element={[<LabNavbar/>,<LabAddTest />]} />
        <Route path="/lab_view_tests" element={[<LabNavbar/>,<LabViewTests />]} />
        <Route path="/lab_edit_test/:id" element={[<LabNavbar/>,<LabEditTest />]} />
        <Route path="/lab_view_test_rq" element={[<LabNavbar/>,<LabViewTestReq />]} />
        <Route path="/lab_view_test_bookings" element={[<LabNavbar/>,<LabViewTestBooking />]} />
        <Route path="/lab_add_result/:bid/:tid/:uid" element={[<LabNavbar/>,<LabAddResult />]} />
        <Route path="/lab_view_results/:id" element={[<LabNavbar/>,<LabViewResults />]} />


        <Route path="/admin" element={[<AdminLogin />]} />
        <Route path="/admin_dashboard" element={[<AdminNavbar/>,<AdminDashboard />]} />
        <Route path="/admin_home" element={[<AdminNavbar/>,<AdminHome url={url} />]} />            
        <Route path="/admin_view_doctors" element={[<AdminNavbar/>,<AdminViewDoctors url={url} />]} />
        <Route path="/admin_view_tests" element={[<AdminNavbar/>,<AdminViewTests  />]} />
        <Route path="/admin_view_hospitals" element={[<AdminNavbar/>,<AdminViewHospitals url={url} />]} />
        <Route path="/admin_view_hospitals_req" element={[<AdminNavbar/>,<AdminViewHospitalReq url={url} />]} />


        <Route path="/pharmacy_login" element={[<PharmacyLogin />]} />
        <Route path="/pharmacy_home" element={[<PharmacyNavbar/>,<PharmacyHome />]} />
        <Route path="/pharmacy_add_medicine" element={[<PharmacyNavbar/>,<PharmacyAddMedicine />]} />
        <Route path="/pharmacy_view_medicine" element={[<PharmacyNavbar/>,<PharmacyViewMedicines url={url} />]} />
        <Route path="/pharmacy_view_prescription_req" element={[<PharmacyNavbar/>,<PharmacyViewPrescriptionReq />]} />
        <Route path="/pharmacy_view_invoice/:id" element={[<PharmacyNavbar/>,<PharmacyViewInvoice />]} />


        <Route path="/doctor_login" element={[<DoctorLogin />]} />
        <Route path="/doctor_home" element={[<DoctorNavbar />,<DoctorHome/>]} />
        <Route path="/doctor_profile" element={[<DoctorNavbar/>,<DoctorProfile url={url} />]} />
        <Route path="/doctor_view_appointment" element={[<DoctorNavbar/>,<DoctorViewAppointments  />]} />
        <Route path="/doctor_view_patient_details/:aid/:uid" element={[<DoctorNavbar/>,<DoctorViewPatientDetails url={url} />]} />
        <Route path="/doctor_view_patient_test_result/:id" element={[<DoctorNavbar/>,<DoctorViewUserTestDetails  />]} />
        <Route path="/doctor_add_prescription/:id/:uid" element={[<DoctorNavbar/>,<DoctorAddPrescription  />]} />
        <Route path="/doctor_view_patient_prescription/:id" element={[<DoctorNavbar/>,<DoctorViewPatientPrescription  />]} />
        <Route path="/doctor_view_prescription" element={[<DoctorNavbar/>,<DoctorViewPriscriptions  />]} />

      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
