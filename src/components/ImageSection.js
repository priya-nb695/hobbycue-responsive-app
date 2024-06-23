
import React from 'react';
import GroupImage from '../Images/GroupImage.png'
const ImageSection = () => {
  return (
    <div className="image-section py-5 bg-light">
      <div className="container">
        <div className="row  mb-5">
          <div className="col">
            <h2>Your <span style={{color: '#6c63ff'}}>Hobby</span>, Your <span style={{color: '#6c63ff'}}>Community</span>...</h2>
            <button className="btn btn-primary mt-3">Get started</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={GroupImage} alt="Community" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;

