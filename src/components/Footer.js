import React from 'react';

import Email from '../Icons/Email.png';
import Googleone from '../Icons/Googleone.png';
import Facebookone from '../Icons/Facebookone.png';
import Twitter from '../Icons/Twitter.png';
import Instagram from '../Icons/Instagram.png';
import Telegram from '../Icons/Telegram.png';
import Pinterest from '../Icons/Pinterest.png';
import YouTube from '../Icons/Youtube.png'
function Footer() {
  return (
    <footer className="text-center text-lg-start  text-muted py-4 ">
      <div className="container ">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-start">
            <h5 className="text-uppercase">hobbycue</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-dark">About Us</a></li>
              <li><a href="#" className="text-dark">Our Services</a></li>
              <li><a href="#" className="text-dark">Work with Us</a></li>
              <li><a href="#" className="text-dark">FAQ</a></li>
              <li><a href="#" className="text-dark">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-start">
            <h5 className="text-uppercase">How Do I</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-dark ">Sign Up</a></li>
              <li><a href="#" className="text-dark">Add a Listing</a></li>
              <li><a href="#" className="text-dark">Claim Listing</a></li>
              <li><a href="#" className="text-dark">Post a Query</a></li>
              <li><a href="#" className="text-dark">Add a Blog Post</a></li>
              <li><a href="#" className="text-dark">Other Queries</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-start">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-dark">Listings</a></li>
              <li><a href="#" className="text-dark">Blog Posts</a></li>
              <li><a href="#" className="text-dark">Shop / Store</a></li>
              <li><a href="#" className="text-dark">Community</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-start">
            <h5 className="text-uppercase">Social Media</h5>
            <ul className="list-unstyled d-flex flex-wrap">
              <li  className="me-2 mb-2">
           <img  src={Facebookone} alt="social-media"  className="icon" />
                </li>
                <li className="me-2 mb-2">
           <img  src={Twitter} alt="social-media"  className="icon" />
                </li>
                <li  className="me-2 mb-2">
           <img  src={Instagram} alt="social-media"  className="icon" />
                </li>
                <li  className="me-2 mb-2">
           <img  src={Pinterest} alt="social-media"  className="icon" />
                </li>
                <li  className="me-2 mb-2">
           <img  src={Googleone} alt="social-media"  className="icon" />
                </li>
                <li  className="me-2 mb-2">
           <img  src={YouTube} alt="social-media"  className="icon" />
                </li>
                <li  className="me-2 mb-2">
           <img  src={Telegram} alt="social-media"  className="icon" />
                </li>
                <li  className="me-2 mb-2">
           <img  src={Email} alt="social-media"  className="icon" />
                </li>

            </ul>
            <h5 className="text-uppercase mt-4">Invite Friends</h5>
            <form>
              <div className="input-group ">
                <input type="email" className="form-control footer-input" placeholder="Email ID" />
                <button className="btn-footer-invite " type="submit">Invite</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center p-4  copyright">
        © Purple Cues Private Limited
      </div>
    </footer>
  );
}

export default Footer;
