import React, { useState } from 'react'
import axiosInstance from '../BaseUrls';
import { Link, useNavigate } from 'react-router-dom';
import EmptyNavbar from './EmptyNavbar';

function HospitalRegistration() {

    const [data, setData] = useState({
        name: "",
       
        email: "",
        regno: "",
        city: "",
        district: "",
        pincode: "",
        contact: "",
        image: null,
        password: ""
      });

      const navigate=useNavigate()
    
      const handleChange = (a) => {
        if (a.target.name == "image") {
          setData({ ...data, image: a.target.files[0] });
        } else {
          setData({ ...data, [a.target.name]: a.target.value });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
       
          if (!/^\d{6}$/.test(data.pincode)) {
              alert("Pincode must have 6 digits");
              return;
            }
          if (!/^\d{10}$/.test(data.contact)) {
              alert("Contact must have 10 digits");
              return;
            }
  
            axiosInstance.post(`/registerHospital`,data, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res)=>{
              console.log(res);
                if(res.data.status===200){
                  alert("Registration Successful")
                  navigate('/hospital_login')
                }
                else{
                  alert("something went wrong")
                }
              })
              .catch((err)=>{
                console.log(err);
                alert("something went wrong")
              })
  
            
          
    
      
  
  
  
      };

  return (
    <div>
      <div className="user_reg">
      <EmptyNavbar/>
        <div className="user_reg_head">
          <p className="user_reg_head_title">Register Now!</p>
          <p className="user_reg_head_para">Fill the information carefully</p>
        </div>
        <form onSubmit={handleSubmit} >
            <div className="user_reg_content">
          <p className="user_reg_content_title">Personal Information</p>
          <div className="user_reg_content_inpgrp row">
            
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                  Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
              />
            </div>
           
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                Personal Email Id
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email Address"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
              Registration Number  
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Registration Number"
                name="regno"
                value={data.regno}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                City
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="City"
                name="city"
                value={data.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                District
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="District"
                name="district"
                value={data.district}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                Pincode
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Pincode"
                name="pincode"
                value={data.pincode}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                Contact
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Contact"
                name="contact"
                value={data.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                Image
              </label>
              <input
                type="file"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="image"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="user_reg_btn_div" >
            <button type="submit" className="user_reg_btn" >Submit</button>
          </div>
        </div> 
        </form>
       
        <div className="user_log_signup pb-5" >
            <p>Have an account? <Link to='/hospital_login' > Log in</Link></p>
          </div>
      </div>
    </div>
  )
}

export default HospitalRegistration
