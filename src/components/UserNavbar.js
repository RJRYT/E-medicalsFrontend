import React from 'react'
import './UserNavbar.css'
import { Link } from 'react-router-dom'

function UserNavbar() {
  return (
    <div>
       <div className='empty_navbar' >
        <div className='container d-flex justify-content-between'>
            <div className='empty_navbar_logo' >
                <p className='empty_navbar_logo_title1' >EMED<span className='empty_navbar_logo_title2' >icals</span></p>
                {/* <p className='empty_navbar_logo_title2'>icals</p> */}
            </div>
            <div className='user_nav_content'>
            <Link to='/user_home' >Home</Link>

               <Link to='/user_profile' >Profile</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserNavbar
