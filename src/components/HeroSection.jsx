import React from 'react';
import Aurora from './Aurora.jsx';
import Ballpit from './Ballpit.jsx';
import SplitText from './SplitText.jsx';
import RotatingText from './RotatingText.jsx';
import { ShimmerButton } from './ShimmerButton.jsx';
import GradientText from './GradientText.jsx';
import PillNav from './PillNav.jsx';
import CurvedLoop from './CurvedLoop.jsx'; // Added import
import './HeroSection.css';

const HeroSection = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const handleRegisterClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSc3QQowjQnrlxSTs7g0Upd0SzzU8Sv9ZoulHjn3BuiU_g4Zwg/viewform', '_blank');
  };

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About IDEA', href: '#about' },
    { label: 'Prices & Awards', href: '#prices' },
    { label: 'Events', href: '#events' },
    { label: 'Registration', href: '#registration' },
    { label: 'Experts', href: '#experts' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Supported By', href: '#supported' },
    { label: 'Founders & Leaders', href: '#founders' },
    { label: 'Organizing Team', href: '#team' },
    { label: 'Contact Us', href: '#contact' }
  ];

  return (
    <section className="hero-section">
      {/* Top Front Layer - Navbar */}
      <div className="navbar-layer">
        <PillNav
          logo="/header-image.png"
          logoAlt="MU IDEA Logo"
          items={navItems}
          activeHref="#"
          baseColor="#ffffff"
          pillColor="#060010"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#060010"
        />
      </div>

      {/* Bottom Layer - Aurora Background */}
      <div className="aurora-layer">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Middle Layer - Ballpit */}
      <div className="ballpit-layer">
        <Ballpit
          count={100}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={true}
        />
      </div>

      {/* Content Layer */}
      <div className="content-layer">
        <div className="hero-content-container">
          
          {/* Left Section - Logo + Event Title Block */}
          <div className="left-section">
            {/* Logo & NAAC badge container */}
            <div className="logo-container">
              <img 
                src="/header-image.png" 
                alt="MU Logo" 
                className="mu-logo"
              />
            </div>
            
            {/* Gradient Text - Organizes */}
            <div className="organizes-container">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="organizes-text"
              >
                Organizes
              </GradientText>
            </div>
            
            {/* MU IDEA Title */}
            <div className="title-container">
              <SplitText
                text="MU IDEA"
                className="main-heading"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                tag="h1"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
            
            {/* Tagline */}
            <div className="tagline-container">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="tagline-text"
              >
                Innovate | Develop | Exhibit | Accelerate
              </GradientText>
            </div>
            
            {/* Register Button - Positioned below the tagline */}
            <div className="button-container-centered">
              <ShimmerButton
                shimmerColor="#ffffff"
                shimmerSize="0.05em"
                shimmerDuration="3s"
                borderRadius="100px"
                background="rgba(0, 0, 0, 0.8)"
                className="register-button"
                onClick={handleRegisterClick}
              >
                Register Now
              </ShimmerButton>
            </div>
          </div>

          {/* Right Side - Rotating Text */}
          <div className="right-content">
            <div className="rotating-text-wrapper">
              <span className="prefix-text gradient-text">Conclave For</span>
              <RotatingText
                texts={[
                  "Innovators",
                  "Incubators", 
                  "Investors",
                  "Students",
                ]}
                mainClassName="rotating-text-main-new"
                staggerFrom="first"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                staggerDuration={0}
                splitLevelClassName="rotating-split-level-new"
                transition={{ duration: 0.5 }}
                rotationInterval={2000}
                animatePresenceMode="wait"
                auto={true}
                loop={true}
              />
            </div>
          </div>

        </div>
        
        {/* Curved Loop Text - Below both left and right sections */}
        <div className="curved-loops-container">
          <CurvedLoop 
            marqueeText="Welcome to MU IDEA ✦ Innovate ✦ Develop ✦ Exhibit ✦ Accelerate ✦"
            speed={2}
            curveAmount={200}
            direction="left"
            interactive={true}
            fullWidth={true}
            className="small-curve"
          />
          <CurvedLoop 
            marqueeText="Join the Conclave ✦ Meet Experts ✦ Win Prizes ✦"
            speed={3}
            curveAmount={150}
            direction="right"
            interactive={true}
            fullWidth={true}
            className="small-curve"
          />
          <CurvedLoop 
            marqueeText="Register Now ✦ Join Our Exiciting Events ✦ Don't Miss Out ✦"
            speed={1}
            curveAmount={100}
            direction="left"
            interactive={true}
            fullWidth={true}
            className="small-curve"
          />
        </div>
        
        {/* Removed the separate button container from here */}
      </div>
      
      {/* New Layer Below Hero Section with 2.49:1 ratio */}
      <div className="additional-layer">
        <div className="additional-content">
          {/* Content for the additional layer can be added here */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;