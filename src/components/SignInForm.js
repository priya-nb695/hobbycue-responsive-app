import React from 'react';
import Google from "../Icons/Google.png";
import Facebook from '../Icons/Facebook.png';
import PasswordClose from '../Icons/PasswordClose.png';
import Lock_black from '../Icons/Lock_black.png';
import Checkbox from '../Icons/Checkbox.png'

function SignInForm() {
  return (
    <div className="sign-in-form p-4 bg-light">
      {/* <h3 className="text-center">Sign In</h3> */}
      <button className="btn-sign btn-outline-primary w-100 mb-2 d-flex align-items-center">
        <img src={Google} alt="Google" className="icon me-2" />
        <span className="flex-grow-1 text-center">Continue with Google</span>
      </button>

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
          <img src={PasswordClose} alt="pwdclose" className='password-icon' />         
        </div>
        <div className="mb-3 form-check d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
            <img src={Checkbox} alt="checkbox" classname="icon" />
        Remember me
            </div>
            <div className="d-flex align-items-center">
            <img src={Lock_black} alt="lock" classname="icon" />
Fogot password
        
            </div>
        </div>
        <button type="submit" className="btn-sign btn-primary w-100"> Continue</button>
      </form>

    </div>
  );
}

export default SignInForm;
