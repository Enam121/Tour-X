import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import './footer.css';


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row text-justify">
        <div className="tour-x col-md-4">
          <div className="d-flex align-items-center mb-4">
            <img src={logo} alt="" className="white" /><h3 >Tour<span className="color">X</span> </h3>
          </div>
          <p className="w-75">We listen to you.
            We understand exactly what you want your trip to be.
            Then we make it happen.We plan, you relax.
            We never let go of the customer experience</p>
          <h4>Follow Us:</h4>
          <div>

          </div>
        </div>

        <div className="contact col-md-3 place-items-center">
          <h3>Contact Us</h3>
          <p>
            +01852-1265122 <br />
            +01852-1265122
          </p>
          <p>
            info@tourx.com <br />
            support@tourx.com
          </p>
          <p>
            2752 Willison Street <br />
            Eagan, United State
          </p>
        </div>

        {/* useful link */}
        <div className="col-md-2 text-center">
          <h3>  Useful Link</h3>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destination">Destination</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>

          </ul>

        </div>

        {/* we accepts */}
        <div className="col-md-3 text-center">
          <h3>  We Accepts</h3>
        </div>
      </div>
      <hr />
      <p>
        Copyright © 2021 <span className="color">TourX</span> | <small>Design By <span className="color">Enamul hasan</span></small>
      </p>
    </div>
  );
};

export default Footer;