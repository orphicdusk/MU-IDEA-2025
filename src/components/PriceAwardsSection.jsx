import React from 'react';
import useCounter from '../hooks/useCounter';
import GradientText from './GradientText';
import './PriceAwardsSection.css';

const PriceAwardsSection = () => {
  const awardsCount = useCounter(50);

  return (
    <section id="prices" className="section price-awards-section">
      <h2>Prices & Awards</h2>
      <div className="stats-grid two-col-grid">
        <div className="stat-item prize-card">
          <h3 className="prize-text">₹ 10+ Lacs</h3>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="gradient-label"
          >
            Price Money
          </GradientText>
        </div>
        <div className="stat-item awards-card" data-animated="false">
          <div className="awards-content">
            <div className="trophy-count-row">
              <div className="trophy-icon">
                <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Main Cup Body */}
                  <path d="M25 20 L25 35 Q25 48 40 48 Q55 48 55 35 L55 20 Z" fill="url(#goldGradient)" stroke="#FFA500" strokeWidth="2"/>
                  {/* Cup Rim */}
                  <ellipse cx="40" cy="20" rx="15" ry="3" fill="#FFD700" stroke="#FFA500" strokeWidth="1.5"/>
                  {/* Left Handle */}
                  <path d="M23 25 Q15 25 15 32 Q15 39 23 39" fill="none" stroke="url(#goldGradient)" strokeWidth="3" strokeLinecap="round"/>
                  {/* Right Handle */}
                  <path d="M57 25 Q65 25 65 32 Q65 39 57 39" fill="none" stroke="url(#goldGradient)" strokeWidth="3" strokeLinecap="round"/>
                  {/* Stem */}
                  <rect x="37" y="48" width="6" height="10" rx="1" fill="url(#goldGradient)" stroke="#FFA500" strokeWidth="1"/>
                  {/* Base */}
                  <ellipse cx="40" cy="58" rx="12" ry="3" fill="#FFD700" stroke="#FFA500" strokeWidth="1.5"/>
                  <rect x="28" y="58" width="24" height="4" rx="1" fill="url(#goldGradient)" stroke="#FFA500" strokeWidth="1"/>
                  {/* Sparkles */}
                  <circle cx="35" cy="28" r="1.5" fill="#FFF" opacity="0.8"/>
                  <circle cx="45" cy="32" r="1.5" fill="#FFF" opacity="0.8"/>
                  <circle cx="40" cy="25" r="2" fill="#FFF" opacity="0.9"/>
                  {/* Star on top */}
                  <path d="M40 12 L42 17 L47 17 L43 20 L45 25 L40 22 L35 25 L37 20 L33 17 L38 17 Z" fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
                  {/* Gradients */}
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFD700"/>
                      <stop offset="50%" stopColor="#FFA500"/>
                      <stop offset="100%" stopColor="#FF8C00"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="count-number awards-stat">{awardsCount}+</h3>
            </div>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="gradient-label"
            >
              Awards
            </GradientText>
          </div>
        </div>
      </div>
      <div className="subtext-wrapper">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="section-subtext"
        >
          Compete & Win Events to Get Prices and Awards!!!
        </GradientText>
      </div>
    </section>
  );
};

export default PriceAwardsSection;