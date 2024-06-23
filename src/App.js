// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import SectionCardContent  from './components/SectionCardContent';
// import './styles.css';

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <MainContent />
//       <SectionCardContent />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SignInForm from './components/SignInForm';
import JoinInForm from './components/JoinInForm';
import TabSection from './components/TabSection';
import ImageSection from './components/ImageSection'

import SectionCard from './components/SectionCard';
//import AdditionalSections from './components/AdditionalSections';
import AddYourOwn from './components/AddYourOwn';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SectionCardContent  from './components/SectionCardContent';
import './styles.css';

function App() {
  return (
    <div  className="container-fluid">
      <Header />
      {/* <main className="container my-4">
       
      </main> */}
       <MainContent />
        {/* <SignInForm />
        <JoinInForm /> */}
        {/* <TabSection /> */}
        <SectionCardContent />
        <AddYourOwn />
       
        <Testimonials />
        <ImageSection />
      <Footer />
    </div>
  );
}

export default App;

