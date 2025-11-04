import React, { useEffect, useRef } from 'react';
import Cubes from './Cubes';
import './CubeSection.css';

const CubeSection = () => {
  return (
    <section className="cube-section">
      <div className="cube-container">
        <h2 className="cube-title">Interactive 3D Cube Experience</h2>
        <div className="cube-wrapper">
          <Cubes 
            gridSize={8}
            maxAngle={60}
            radius={4}
            borderStyle="2px dashed #5227FF"
            faceColor="#1a1a2e"
            rippleColor="#ff6b6b"
            rippleSpeed={1.5}
            autoAnimate={true}
            rippleOnClick={true}
          />
        </div>
        <p className="cube-description">
          Move your cursor over the cubes to interact with them. Click to create ripple effects!
        </p>
      </div>
    </section>
  );
};

export default CubeSection;
