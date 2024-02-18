import React from 'react'
import Element from "../Assets/img/element.png";
import illustration from "../Assets/img/trafalgar-header illustration 1.png";

function LandingCarousel() {
  return (
    <div>
      <section className="rjr_hero rjr_container rjr_flex rjr_section">
      <img src={Element} className="rjr_circle-pattern" alt="pattern"/>
      <div className="rjr_hero-cap">
      <h1 className='rjr_h1'>Virtual healthcare 
            for you</h1>
            <p className='rjr_p'>
            Trafalgar provides progressive, and affordable 
            healthcare, accessible on mobile and online 
            for everyone
        </p>
        <button className="rjr_button rjr_btn-primary">Consult today</button>
      </div>
      <div className="rjr_hero-img">
        <img src={illustration} alt="rjr_hero-photo"/>
      </div>
    </section>
    </div>
  )
}

export default LandingCarousel
