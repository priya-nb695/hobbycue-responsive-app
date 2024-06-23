import React, { useState } from 'react';
import SignInForm from './SignInForm';
import JoinInForm from './JoinInForm';

function TabSection() {
  const [activeTab, setActiveTab] = useState('signIn');

  return (
    <div className="tab-section">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'signIn' ? 'active' : ''}`} 
            href="#!" 
            onClick={() => setActiveTab('signIn')}
          >
            Sign In
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'joinIn' ? 'active' : ''}`} 
            href="#!" 
            onClick={() => setActiveTab('joinIn')}
          >
            Join In
          </a>
        </li>
      </ul>
      <div className="tab-content mt-3">
        {activeTab === 'signIn' && <SignInForm />}
        {activeTab === 'joinIn' && <JoinInForm />}
      </div>
    </div>
  );
}

export default TabSection;
