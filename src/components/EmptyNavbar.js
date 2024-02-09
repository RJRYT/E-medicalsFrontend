import React from 'react'
import './EmptyNavbar.css'

function EmptyNavbar() {
  return (
    <div  >
      <div className='empty_navbar' >
        <div className='container'>
            <div className='empty_navbar_logo' >
                <p className='empty_navbar_logo_title1' >EMED<span className='empty_navbar_logo_title2' >icals</span></p>
                {/* <p className='empty_navbar_logo_title2'>icals</p> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmptyNavbar
