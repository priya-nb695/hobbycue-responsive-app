// // src/ImageSection.js
// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';

// const = () => {
//   return (
//     <div className="image-section py-5">
//       <Container>
//         <Row className="text-center mb-5">
//           <Col>
//             <h2>Your <span style={{color: '#6c63ff'}}>Hobby</span>, Your <span style={{color: '#6c63ff'}}>Community</span>...</h2>
//             <Button variant="primary" className="mt-3">Get started</Button>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <img src="path/to/your/image.jpg" alt="Community" className="img-fluid" />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ImageSection;



// src/ImageSection.js
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

