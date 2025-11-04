import React from 'react';
import Aurora from './Aurora.jsx';
import './HeroSection.css';
import './Aurora.css';

const AuroraHeroSection = () => {
  return (
    <section className="hero-section">
      <div className="aurora-layer">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
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

export default AuroraHeroSection;