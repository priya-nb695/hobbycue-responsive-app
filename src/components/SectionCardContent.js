import React from 'react';
import SectionCard from './SectionCard';
import People from "../Icons/People.png";
import Location from "../Icons/Location.png";
import Product from "../Icons/Product.png";
import ProgramIcon from "../Icons/ProgramIcon.png";

function SectionCardContent() {
  return (
    <section > 
   <div className="row ">
   <SectionCard 
        imgSrc={People}
        title="People" 
        text="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator." 
        buttonText="Connect" 
        buttonLink="#"
         className="card-people"
      />
      <SectionCard 
        imgSrc={Location}
        title="Place" 
        text="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue." 
        buttonText="Meet up" 
        buttonLink="#"
         className="card-place"
      />
   {/* </div> */}
   {/* <div className="row text-center"> */}
   <SectionCard 
        imgSrc={Product}
        title="Product" 
        text="Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members." 
        buttonText="Get it" 
        buttonLink="#"
          className="card-product"
      />
      <SectionCard 
        imgSrc={ProgramIcon}
        title="Program" 
        text="Find events, meetups and workshops related to your hobby. Register or buy tickets online." 
        buttonText="Attend" 
        buttonLink="#"
        className="card-program"
      />
    </div>
    </section>
  );
}

export default SectionCardContent;
