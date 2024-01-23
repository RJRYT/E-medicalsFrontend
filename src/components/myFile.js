import React from "react";
import img1 from '../Assets/trafalgar-header illustration 1(1).png'
import img2 from '../Assets/Frame(1).png'
import img3 from '../Assets/Frame(2).png'
import img4 from '../Assets/Frame(3).png'
import img5 from '../Assets/Frame(4).png'
import img6 from '../Assets/Frame(6).png'
import img7 from '../Assets/Frame.png'
import img8 from '../Assets/trafalgar-illustration sec02 1.png'
import img9 from '../Assets/trafalgar-illustration sec03 1.png'


function MyFile() {
  return (
    <div>
      <header id="head">
        <div id="icon">
          <div id="icon1">Emed</div>
          <div id="icon2">ical</div>
        </div>
        <nav>
          <a href="#home">About us</a>
          <a href="#home">Contact us</a>
          <a href="#about">login</a>
          <a href="#services">Find a doctor</a>
          <a href="#contact">Home</a>
        </nav>
      </header>

      <div class="container text-center" id="virtualHealth">
        <div class="row">
          <div class="col" id="vhContent">
            Virtual Health <br />
            for you
            <p>
              Trafalgar provides progressive, and affordable <br />
              healthcare, accessible on mobile and online <br />
              for everyone
            </p>
            <input type="button" id="vhbutt" value="consult today" />
          </div>
          <div class="col">
            <img src={img1} />
          </div>
        </div>
      </div>

      <div id="service">
        Our services
        <br />
        <p id="pser">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment <br />
          with our highly qualified doctors you can consult with us which type
          of service is suitable for your health
        </p>
      </div>

      <div
        id="backg"
         >
        <div class="container" id="sixdiv">
          <div class="row">
            <div class="col-md-4">
              <div class="custom-column" id="eachdiv">
                <img src={img7} alt="Image 1" />
                Search doctor
                <p>
                  Choose your doctor from thousands of specialist, general, and
                  trusted hospitals
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="custom-column" id="eachdiv">
                <img src={img2} alt="Image 1" />
                Online Pharmacy
                <p>
                  Buy your medicines with our mobile application with a simple
                  delivery system
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="custom-column" id="eachdiv">
                <img src={img3} alt="Image 1" />
                Consultation
                <p>
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="custom-column" id="eachdiv">
                <img src={img4} alt="Image 1" />
                Lab request
                <p>
                  Will receive lab requests quickly and have easy access from
                  anywhere
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="custom-column" id="eachdiv">
                <img src={img5} alt="Image 1" />
                Emergency care
                <p>
                  You can get 24/7 urgent care for yourself or your children and
                  your lovely family
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="custom-column" id="eachdiv">
                <img src={img6} alt="Image 1" />
                Tracking
                <p>Track and save your medical history and health data </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="button">
        <button class="centered-button">Centered Button</button>
      </div>

      <div class="container text-center" id="virtualHealth">
        <div class="row">
          <div class="col">
            <img src={img8} />
          </div>
          <div class="col" id="vhContent">
            Leading Healthcare <br />
            providers
            <p>
              Trafalgar provides progressive, and affordable
              <br /> healthcare, accessible on online for everyone. To
              <br /> us, it’s not just work. We take pride
              <br />
              in the solutions we deliver
            </p>
            <input type="button" id="vhbutt" value="Learn more" />
          </div>
        </div>
      </div>

      <div class="container text-center" id="virtualHealth">
        <div class="row">
          <div class="col" id="vhContent">
            Consultation
            <p>
              Our dedicated patient engagement app and <br />
              web portal allow you to access information <br />
              instantaneously (no tedeous form, long calls, <br />
              or administrative hassle) and securely
            </p>
            <input type="button" id="vhbutt" value="download" />
          </div>
          <div class="col">
            <img src={img9} />
          </div>
        </div>
      </div>

      <footer >
        <div class="footer-section container text-start">
          <h3>EMEDICAL</h3>
          <p>
            EMEDICAL provides progressive, and affordable healthcare, accessible
            on mobile and online for everyone
          </p>
          <p>©EMEDICAL PVT 2024. All rights reserved</p>
        </div>
        <div class="footer-section text-start">
          <h3>Company</h3>
          <p>About</p>
          <p>Testimonials</p>
          <p>Find a doctor</p>
          <p>Apps</p>
        </div>
        <div class="footer-section text-start">
          <h3>Region</h3>
          <p>India</p>
          <p>Singapore</p>
          <p>Hongkong</p>
          <p>Canada</p>
        </div>
        <div class="footer-section text-start">
          <h3>Help</h3>
          <p>Help center</p>
          <p>Contact support</p>
          <p>Instructions</p>
          <p>How it works</p>
        </div>
      </footer>
    </div>
  );
}

export default MyFile;
