import React, { useState, useEffect } from 'react';
import './LeadersSection.css';

const LeadersSection = () => {
  const leaders = [
    { id: 1, name: 'Ketan Marwadi', position: 'Founder & President', description: 'Visionary leader driving innovation and educational excellence at Marwadi Chandarana Group.', image: '/Leaders_Images/leader1.png', linkedin: '#' },
    { id: 2, name: 'Jitubhai Chandarana', position: 'Co-Founder & Vice-Chairman', description: 'Strategic leader committed to building world-class educational and business ecosystems.', image: '/Leaders_Images/Leader2.png', linkedin: '#' },
    { id: 3, name: 'Sandeep Marwadi', position: 'Honourable Trustee', description: 'Dedicated trustee fostering growth and development across educational initiatives.', image: '/Leaders_Images/Leader3.png', linkedin: '#' },
    { id: 4, name: 'Jeet Marwadi', position: 'Honourable Trustee', description: 'Committed to empowering students and driving institutional excellence.', image: '/Leaders_Images/Leader4.png', linkedin: '#' },
    { id: 5, name: 'Amish Chandarana', position: 'Honourable Trustee', description: 'Passionate about innovation and creating opportunities for future leaders.', image: '/Leaders_Images/Leader5.png', linkedin: '#' },
    { id: 6, name: 'Nishit Chandarana', position: 'Honourable Trustee', description: 'Focused on strategic development and institutional growth.', image: '/Leaders_Images/Leader6.png', linkedin: '#' },
    { id: 7, name: 'Dhruv Marwadi', position: 'Honourable Trustee', description: 'Dedicated to advancing educational standards and student success.', image: '/Leaders_Images/Leader7.png', linkedin: '#' },
    { id: 8, name: 'Dr Rajendrasinh Jadeja', position: 'Provost', description: 'Academic leader with expertise in educational administration and institutional development.', image: '/Leaders_Images/Leader8.png', linkedin: '#' },
    { id: 9, name: 'Naresh Jadeja', position: 'Executive Registrar', description: 'Experienced administrator ensuring operational excellence and student services.', image: '/Leaders_Images/Leader9.png', linkedin: '#' },
    { id: 10, name: 'Dr Sanjeet Singh', position: 'Pro Vice-Chancellor', description: 'Academic leader committed to research, innovation and educational quality.', image: '/Leaders_Images/Leader10.png', linkedin: '#' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % leaders.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleDotClick = (index) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  // Auto-rotation every 2 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % leaders.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [leaders.length, isPaused]);

  const getCardPosition = (index) => {
    const diff = index - activeIndex;
    const total = leaders.length;
    
    let normalizedDiff = diff;
    if (diff > total / 2) normalizedDiff = diff - total;
    if (diff < -total / 2) normalizedDiff = diff + total;

    return normalizedDiff;
  };

  return (
    <section id="founders" className="section leader-carousel-section">
      <h2>Founders & Leaders</h2>
      <div className="carousel-3d-container" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="carousel-3d-wrapper">
          <div className="carousel-3d-track">
            {leaders.map((leader, index) => {
              const position = getCardPosition(index);
              const isActive = position === 0;
              const isVisible = Math.abs(position) <= 2;

              return (
                <div
                  key={leader.id}
                  className={`profile-card-3d ${isActive ? 'active' : ''} ${!isVisible ? 'hidden' : ''}`}
                  style={{
                    '--position': position,
                    '--abs-position': Math.abs(position)
                  }}
                >
                  <div className="banner">
                    <div className="profile-img-wrapper">
                      <img src={leader.image} alt={leader.name} className="profile-img" />
                    </div>
                  </div>
                  <div className="profile-content">
                    <h2 className="name">{leader.name}</h2>
                    <p className="position">{leader.position}</p>
                    <p className="description">{leader.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button className="carousel-3d-btn prev" onClick={handlePrev} disabled={isTransitioning}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="carousel-3d-btn next" onClick={handleNext} disabled={isTransitioning}>
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Navigation Dots */}
        <div className="carousel-dots">
          {leaders.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              disabled={isTransitioning}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;