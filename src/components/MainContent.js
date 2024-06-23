import React from 'react';
import TabSection from './TabSection';
import hobbyImage from '../Images/hobbyImage.png'
function MainContent() {
  return (
    // <main className="row mb-4 main-section">
    //   <div className="col-12 col-md-6 d-flex align-items-center main-description">
    //     <div>
    //       <h2>Explore your <span className="text-primary">hobby</span> or <span className="text-secondary">passion</span></h2>
    //       <p>
    //       Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, 
    //       teachers, suppliers, classes, workshops, and places to practice, participate or perform.
    //        Your hobby may be about visual or performing arts, sports, games, gardening, model making,
    //         cooking, indoor or outdoor activities…

    //       </p>
    //       <br/>
    //       <p> 
    //       If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
    //        products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
    //       </p>
    //       <img src={hobbyImage} alt="Hobby illustration" className="img-fluid" />
    //     </div>
    //   </div>

    //   <div className="col-12 col-md-6 d-flex align-items-center tab-section-main">
    //     <TabSection />
    //   </div>
    // </main>
     <main className="row mb-4 ">
     <div className="col-12 col-md-6 d-flex align-items-center ">
       <div className="main-content">
         <h2>Explore your <span className="text-primary">hobby</span> or <span className="text-secondary">passion</span></h2>
         <p>
         Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, 
         teachers, suppliers, classes, workshops, and places to practice, participate or perform.
          Your hobby may be about visual or performing arts, sports, games, gardening, model making,
           cooking, indoor or outdoor activities…

         </p>
         <br/>
         <p> 
         If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
          products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
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
