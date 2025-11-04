import React, { useState, useEffect } from 'react';
import useCounter from '../hooks/useCounter';
import GradientText from './GradientText';
import SplitText from './SplitText';
import './AboutSection.css';

const AboutSection = () => {
  const startupsCount = useCounter(400);
  const investorsCount = useCounter(100);
  const incubatorsCount = useCounter(50);
  const innovatorsCount = useCounter(100);
  
  const [countsReady, setCountsReady] = useState(false);
  
  useEffect(() => {
    // Wait for counters to finish animating
    const timer = setTimeout(() => {
      setCountsReady(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="section about-idea-section">
      <h2>About IDEA 2025</h2>
      <div className="vision-card" data-animated="false">
        <div className="stats-grid four-col-grid">
          <div className="stat-item">
            {countsReady ? (
              <SplitText
                text="400+"
                className="count-number about-stat"
                delay={50}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-50px"
                textAlign="center"
                tag="h3"
              />
            ) : (
              <h3 className="count-number about-stat">{startupsCount}+</h3>
            )}
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="stat-label"
            >
              Startups
            </GradientText>
          </div>
          <div className="stat-item">
            {countsReady ? (
              <SplitText
                text="100+"
                className="count-number about-stat"
                delay={50}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-50px"
                textAlign="center"
                tag="h3"
              />
            ) : (
              <h3 className="count-number about-stat">{investorsCount}+</h3>
            )}
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="stat-label"
            >
              Investors
            </GradientText>
          </div>
          <div className="stat-item">
            {countsReady ? (
              <SplitText
                text="50+"
                className="count-number about-stat"
                delay={50}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-50px"
                textAlign="center"
                tag="h3"
              />
            ) : (
              <h3 className="count-number about-stat">{incubatorsCount}+</h3>
            )}
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="stat-label"
            >
              Incubators
            </GradientText>
          </div>
          <div className="stat-item">
            {countsReady ? (
              <SplitText
                text="100+"
                className="count-number about-stat"
                delay={50}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-50px"
                textAlign="center"
                tag="h3"
              />
            ) : (
              <h3 className="count-number about-stat">{innovatorsCount}+</h3>
            )}
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="stat-label"
            >
              Innovators
            </GradientText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;