import React from 'react';
import './HeroSection.css';

const SimpleHeroSection = () => {
  return (
    <section className="hero-section">
      <div className="content-layer">
        <div className="hero-content">
          <div className="left-content">
            <h1 className="main-heading">MU IDEA</h1>
            <p className="subtitle">
              Where innovation meets opportunity
            </p>
          </div>
          <div className="right-content">
            <div className="rotating-text-container">
              <span className="prefix">Conclave Summit For</span>
              <div className="rotating-text-main">
                Innovators
              </div>
            </div>
            <div className="button-container">
              <button className="register-button">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHeroSection;