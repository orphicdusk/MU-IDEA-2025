import React, { useState, useEffect } from 'react';
import './ExpertsSection.css';

const ExpertsSection = () => {
  const experts = [
    { id: 1, name: 'Jatin Kataria', position: 'Startup Ecosystem Specialist', description: 'Globally connected entrepreneur and mentor with experience across 30+ countries, advising 50+ ventures and turning innovation into impact.', image: '/Experts_Images/Expert1.png', linkedin: 'https://www.linkedin.com/in/jatinkataria' },
    { id: 2, name: 'Nisha Kotecha', position: 'Co-Founder & CEO', description: 'Serial entrepreneur who co-founded Rajkot\'s first major coworking hub and built a digital content firm serving 35+ industries across 8 countries.', image: '/Experts_Images/Expert2.png', linkedin: 'https://in.linkedin.com/in/nisha-kotecha' },
    { id: 3, name: 'Darshit Ahya', position: 'Director & Company Secretary', description: 'Leads a peer-reviewed firm offering services in corporate law, IPR, valuations and business advisory in Rajkot.', image: '/Experts_Images/Expert3.png', linkedin: 'https://in.linkedin.com/in/cs-adv-darshit-ahya-04010a11a' },
    { id: 4, name: 'Nikhil Suthar', position: 'Founder & Mentor', description: 'Over a decade of experience in the startup ecosystem, driving partnerships and accelerator programmes to help early-stage entrepreneurs build traction.', image: '/Experts_Images/Expert4.png', linkedin: 'https://www.linkedin.com/in/nikhil-suthar' },
    { id: 5, name: 'Niyati Shah', position: 'Senior Social Development Specialist', description: 'Over 25 years addressing structural inequalities, specializing in gender-based violence, social development, and trauma-focused wellbeing.', image: '/Experts_Images/Expert5.png', linkedin: 'https://www.linkedin.com/in/niyatimshah' },
    { id: 6, name: 'Vaishali Parekh', position: 'Vice-President', description: '15+ years in technical stock market research, offering trading strategies, intraday calls and market outlooks across Indian equities.', image: '/Experts_Images/Expert6.png', linkedin: 'https://www.linkedin.com/in/vaishali-parekh-66914a213' },
    { id: 7, name: 'Dr Atharva Poundarik', position: 'Assistant Professor, IIT Ropar', description: 'PhD in Biomedical Engineering, specializing in biomaterial systems, implantable medical devices and technologies for orthopedics and wound-healing.', image: '/Experts_Images/Expert7.png', linkedin: 'https://in.linkedin.com/in/atharva-poundarik-44723b44' },
    { id: 8, name: 'Rajul Parekh', position: 'Strategy & Product Leader', description: 'Over a decade of experience in strategy, product management and operations, with leadership roles in venture space and business transformation.', image: '/Experts_Images/Expert8.png', linkedin: 'https://www.linkedin.com/in/rajul-parekh' },
    { id: 9, name: 'Jalaj Chhaya', position: 'Associate Vice President', description: 'Chartered Accountant with over a decade in finance, management reporting, budgeting, and teaching personal-finance certification programmes.', image: '/Experts_Images/Expert9.png', linkedin: 'https://www.linkedin.com/in/jalaj-chhaya-94b0514a' },
    { id: 10, name: 'Ravin Bhadja', position: 'Founder & CEO', description: 'Serial entrepreneur with 20+ years in aerospace and manufacturing, supporting hardware-innovation and supply-chain development in India.', image: '/Experts_Images/Expert10.png', linkedin: 'https://www.linkedin.com/in/ravinbhadja' },
    { id: 11, name: 'Brinda Pandya', position: 'Senior Manager, KIIF', description: 'Startup ecosystem mentor based in Rajkot, previously worked as a consultant at PwC India.', image: '/Experts_Images/Expert11.png', linkedin: 'https://in.linkedin.com/in/brinda-pandya' },
    { id: 12, name: 'Sandip Takwani', position: 'Start-up Mentor | Innovator', description: 'M.Tech from Nirma University with 5+ years driving innovation, advising startups and working in campus-ecosystems at KIIF.', image: '/Experts_Images/Expert12.png', linkedin: 'https://www.linkedin.com/in/sandip-takwani-595998184' },
    { id: 13, name: 'Piyalee Chattopadhyay', position: 'Global Program Manager', description: 'Two decades in project & strategic partnerships, empowering startups through TiE\'s 60+ chapters globally with investment facilitation and mentoring.', image: '/Experts_Images/Expert13.png', linkedin: 'https://in.linkedin.com/in/piyalee-chattopadhyay-8a3b2113' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % experts.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + experts.length) % experts.length);
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
    if (isPaused) return; // Don't start interval if paused

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [experts.length, isPaused]);

  const getCardPosition = (index) => {
    const diff = index - activeIndex;
    const total = experts.length;
    
    let normalizedDiff = diff;
    if (diff > total / 2) normalizedDiff = diff - total;
    if (diff < -total / 2) normalizedDiff = diff + total;

    return normalizedDiff;
  };

  return (
    <section id="experts" className="section speaker-carousel-section">
      <h2>Experts</h2>
      <div className="carousel-3d-container" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="carousel-3d-wrapper">
          <div className="carousel-3d-track">
            {experts.map((expert, index) => {
              const position = getCardPosition(index);
              const isActive = position === 0;
              const isVisible = Math.abs(position) <= 2;

              return (
                <div
                  key={expert.id}
                  className={`profile-card-3d ${isActive ? 'active' : ''} ${!isVisible ? 'hidden' : ''}`}
                  style={{
                    '--position': position,
                    '--abs-position': Math.abs(position)
                  }}
                >
                  <div className="banner">
                    <a href={expert.linkedin} className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <div className="profile-img-wrapper">
                      <img src={expert.image} alt={expert.name} className="profile-img" />
                    </div>
                  </div>
                  <div className="profile-content">
                    <h2 className="name">{expert.name}</h2>
                    <p className="position">{expert.position}</p>
                    <p className="description">{expert.description}</p>
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
          {experts.map((_, index) => (
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

export default ExpertsSection;