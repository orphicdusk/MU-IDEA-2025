import React, { useState, useEffect } from 'react';
import './OrganizingTeamSection.css';

const OrganizingTeamSection = () => {
  const teamMembers = [
    { id: 1, name: 'Dr Amit Sata', position: 'Event Coordinator', description: 'Dedicated coordinator ensuring seamless execution of IDEA 2025 with exceptional organizational skills.', image: '/Organizing_Team_Images/Org1.png', linkedin: 'https://www.linkedin.com/in/dramitsata' },
    { id: 2, name: 'Prof Vivek Patel', position: 'Event Coordinator', description: 'Experienced coordinator managing event logistics and team collaboration for successful outcomes.', image: '/Organizing_Team_Images/Org2.png', linkedin: 'https://www.linkedin.com/in/vivek-patel-09878077' },
    { id: 3, name: 'Prof Dhaval Anadkat', position: 'Event Coordinator', description: 'Strategic planner coordinating multiple aspects of the event with precision and dedication.', image: '/Organizing_Team_Images/Org3.png', linkedin: 'https://www.linkedin.com/in/dhaval-anadkat-36a910a9' },
    { id: 4, name: 'Parag Solanki', position: 'Event Coordinator', description: 'Committed coordinator ensuring smooth operations and participant engagement throughout the event.', image: '/Organizing_Team_Images/Org4.png', linkedin: 'https://www.linkedin.com/in/er-parag-solanki-043259188' },
    { id: 6, name: 'Mohitrajsinh Jadeja', position: 'Student Coordinator', description: 'Driving strategic event management initiatives while ensuring seamless participant coordination and engagement across all activities.', image: '/Organizing_Team_Images/Org6.png', linkedin: 'https://www.linkedin.com/in/mohitrajsinh-jadeja-16a164382' },
    { id: 7, name: 'Princy Ghetiya', position: 'Student Coordinator', description: 'Orchestrating dynamic event activities and creating exceptional attendee experiences through innovative facilitation and dedicated support.', image: '/Organizing_Team_Images/Org7.png', linkedin: 'https://www.linkedin.com/in/princy-ghetiya-313196350' },
    { id: 8, name: 'Moin Kukkad', position: 'Student Coordinator', description: 'Spearheading operational excellence and technical coordination to deliver flawless event execution and superior participant satisfaction.', image: '/Organizing_Team_Images/Org8.png', linkedin: 'https://www.linkedin.com/in/moin-kukkad-0b3b06292' },
    { id: 9, name: 'Pranav Parmar', position: 'Student Coordinator', description: 'Coordinator supporting various aspects of event management and execution.', image: '/Organizing_Team_Images/Org9.png', linkedin: 'https://www.linkedin.com/in/pranav-parmar-60503b2b2' },
    { id: 5, name: 'Dhruvil Garach', position: 'Student Coordinator', description: 'Contributing to event organization and technical support.', image: '/Organizing_Team_Images/org10.png', linkedin: 'https://www.linkedin.com/in/dhruvil-garach-182352330' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
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
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [teamMembers.length, isPaused]);

  const getCardPosition = (index) => {
    const diff = index - activeIndex;
    const total = teamMembers.length;
    
    let normalizedDiff = diff;
    if (diff > total / 2) normalizedDiff = diff - total;
    if (diff < -total / 2) normalizedDiff = diff + total;

    return normalizedDiff;
  };

  return (
    <section id="team" className="section organizing-team-carousel-section">
      <h2>Organizing Team</h2>
      <div className="carousel-3d-container" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="carousel-3d-wrapper">
          <div className="carousel-3d-track">
            {teamMembers.map((member, index) => {
              const position = getCardPosition(index);
              const isActive = position === 0;
              const isVisible = Math.abs(position) <= 2;

              return (
                <div
                  key={member.id}
                  className={`profile-card-3d ${isActive ? 'active' : ''} ${!isVisible ? 'hidden' : ''}`}
                  style={{
                    '--position': position,
                    '--abs-position': Math.abs(position)
                  }}
                >
                  <div className="banner">
                    <a href={member.linkedin} className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <div className="profile-img-wrapper">
                      <img src={member.image} alt={member.name} className="profile-img" />
                    </div>
                  </div>
                  <div className="profile-content">
                    <h2 className="name">{member.name}</h2>
                    <p className="position">{member.position}</p>
                    <p className="description">{member.description}</p>
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
          {teamMembers.map((_, index) => (
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
      <p className="section-subtext gradient-subtext">Together, we're driving innovation and excellence at IDEA 2025!</p>
    </section>
  );
};

export default OrganizingTeamSection;