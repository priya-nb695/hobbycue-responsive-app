import React from 'react';
import Google from "../Icons/Google.png";
import Facebook from '../Icons/Facebook.png';
import PasswordOpen from '../Icons/PasswordOpen.png'

function JoinInForm() {
  return (
    <div className="join-in-form p-4 bg-light">
      {/* <h3>Join In</h3> */}
      {/* <button className="btn btn-outline-primary w-100 mb-2">Continue with Google</button>
      <button className="btn btn-outline-secondary w-100 mb-2">Continue with Facebook</button> */}
      <div className="btn-sign btn-outline-primary w-100 mb-2 d-flex align-items-center">
        <img src={Google} alt="Google" className="icon me-2" />
        <span className="flex-grow-1 text-center">Continue with Google</span>
      </div>
      <button className="btn-sign btn-outline-secondary w-100 mb-2 d-flex align-items-center">
        <img src={Facebook} alt="Facebook" className="icon me-2" />
        <span className="flex-grow-1 text-center">Continue with Facebook</span>
      </button>
      <div className="divider"><span>Or connect with</span></div>
      <form>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3 position-relative">
          <input type="password" className="form-control" placeholder="Password" />
          <img src={PasswordOpen} alt="pwdopen" className='password-icon' />
          <div className="password-strength">Password strength: Weak</div>
        </div>
        <div className="text-center text-muted mb-2">
          By continuing, you agree to our <span className='privacy-span'>Terms of Service</span> and <span  className='privacy-span'>Privacy Policy.</span> 
        </div>
        <button type="submit" className="btn-sign-white btn-primary w-100">Agree and Continue</button>
      </form>
       
    </div>
  );
}

export default JoinInForm;
