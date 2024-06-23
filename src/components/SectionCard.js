// import React from 'react';

// function SectionCard({ title, text, buttonText, buttonLink,imgSrc }) {
//   return (
//     <div className="col-12 col-md-6 mb-3">
//       <div className="card h-100" >
//         <div className="card-body">
//             <img src={imgSrc} className="icon" alt="cardIcon"/>
//           <h5 className="card-title">{title}</h5>
//           <p className="card-text">{text}</p>
//           <a href={buttonLink} className="btn btn-primary">{buttonText}</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SectionCard;


import React from 'react';

function SectionCard({ title, text, buttonText, buttonLink, imgSrc, className }) {
  return (
    <div className={`col-12 col-md-6 mb-3 ${className}`}>
      <div className="card h-100">
        <div className="card-body">
          <img src={imgSrc} className="icon" alt="cardIcon" />
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={buttonLink} className="btn btn-primary">{buttonText}</a>
        </div>
      </div>
    </div>
  );
}

export default SectionCard;

