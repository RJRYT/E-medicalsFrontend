import React from 'react'
import { Link } from 'react-router-dom'

function HospitalNavbar() {
  return (
    <div>
      <div className='empty_navbar' >
        <div className='container d-flex justify-content-between'>
            <div className='empty_navbar_logo' >
                <p className='empty_navbar_logo_title1' >EMED<span className='empty_navbar_logo_title2' >icals</span></p>
                {/* <p className='empty_navbar_logo_title2'>icals</p> */}
            </div>
            <div className='user_nav_content'>
            <Link to='/hospital_home' >Home</Link>

               <Link to='/hospital_profile' >Profile</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HospitalNavbar