import React from 'react';
import AudioTrack from '../Icons/AudioTrack.png';
import Profiledance from '../Icons/Profiledance.png'
function Testimonials() {
  return (
    <div className="card my-4">
      <div className="card-body">
        <h5 className="card-title">
          <span className="text-secondary">Testimonials</span>
        </h5>
        <p className="card-text">
          In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className=" audio-fl col-12 col-md-6">
          <img src={AudioTrack} alt="Audio" className="img-fluid"  />
          
          <img src={Profiledance} alt="prop-dance" className='img-fluid' />
          {/* <div> */}
           
            {/* <strong>Shubha Nagarajan</strong><br />
            <span className="text-muted">Classical Dancer</span> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
