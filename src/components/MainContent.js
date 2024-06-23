

import React from 'react';
import TabSection from './TabSection';
import hobbyImage from '../Images/hobbyImage.png';

function MainContent() {
  return (
    <main className="row mb-4">
      <div className="col-12 col-md-6 d-flex align-items-center">
        <div className="main-content">
          <h2><em>Explore your <span className="text-primary">hobby</span> or <span className="text-secondary">passion</span></em></h2>
          <p className="d-none d-md-block">
            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, 
            teachers, suppliers, classes, workshops, and places to practice, participate or perform.
            Your hobby may be about visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p className="d-block d-md-none">
            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, 
            teachers, suppliers, classes, workshops, and places to practice, participate or perform.
          </p>
          <br className="d-none d-md-block" />
          <p className="d-none d-md-block">
            If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
            products, services or events. Hop on your hobbyhorse and enjoy the ride.
          </p>
        </div>
      </div>

      <div className="col-12 col-md-6">
        <TabSection />
      </div>
      <div className="col-12 col-md-6">
        <img src={hobbyImage} alt="Hobby illustration" className="img-fluid" />
      </div>
    </main>
  );
}

export default MainContent;


