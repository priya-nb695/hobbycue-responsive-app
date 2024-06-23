
import React from 'react';
import PropTypes from 'prop-types';


function SectionCard({ imgSrc, title, text, buttonText, buttonLink, className }) {
  return (
    <div className={`col-12 col-md-6 mb-4 ${className}`}>
      <div className="card h-100 custom-card d-flex flex-column align-items-center">
        <div className="card-body text-center">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <img src={imgSrc} className="icon me-2" alt="cardIcon" />
            <h5 className="card-title m-0">{title}</h5>
          </div>
          <p className="card-text" >{text}</p>
          <a href={buttonLink} className="btn ptn-link-button">{buttonText}</a>
        </div>
      </div>
    </div>
  );
}

SectionCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SectionCard;

