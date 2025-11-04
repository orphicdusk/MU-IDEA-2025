import React from 'react';
import Aurora from './Aurora.jsx';
import './HeroSection.css';

const AuroraOnlySection = () => {
  return (
    <section className="hero-section" style={{ height: '540px' }}>
      <div className="aurora-layer">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="content-layer">
        {/* Empty content layer - only Aurora background */}
      </div>
    </section>
  );
};

export default AuroraOnlySection;