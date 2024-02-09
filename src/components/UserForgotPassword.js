import React from 'react'
import EmptyNavbar from './EmptyNavbar'
import { Link } from 'react-router-dom'

function UserForgotPassword() {
  return (
    <div>
      <div className="user_log">
        <EmptyNavbar />
        <div className="user_log_box">
          <p className="user_log_box_title mb-5">Forgot Password</p>
          <form  >
            <div className="user_log_inp_box mt-3">
            <input
              type="email"
              className="mb-3"
              placeholder="Email Id"
              name="email"
              
            />
            <input
              type="password"
              className="mb-3"
              placeholder="New Password"
              name="password"
              
            />
           
            <div className="user_log_btn mt-5">
              <button type="submit" >Confirm</button>
            </div>
          </div>
          </form>
          
          {/* <div className="user_log_signup mt-4">
            <p>
              Don't have an account? <Link to="/user_registration">Sign up</Link>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default UserForgotPassword
