import React from 'react';
import './SponsorsSection.css';

const SponsorsSection = () => {
  const sponsors = [
    { id: 1, name: 'Sponsor 1', category: 'Title Sponsor Category', image: '/.image' },
    { id: 2, name: 'Sponsor 2', category: 'Co-Sponsor Category', image: '/.image' },
    { id: 3, name: 'Sponsor 3', category: 'Technology Partner', image: '/.image' },
    { id: 4, name: 'Sponsor 4', category: 'Ecosystem Partner', image: '/.image' },
    { id: 5, name: 'Sponsor 5', category: 'Logistics Partner', image: '/.image' },
    { id: 6, name: 'Sponsor 6', category: 'Media Partner', image: '/.image' }
  ];

  return (
    <section id="sponsors" className="section">
      <h2>Sponsors</h2>
      <div className="grid-container sponsors-grid two-col-sponsors-grid">
        {sponsors.map(sponsor => (
          <div key={sponsor.id} className="card uniform-sponsor-card">
            <img src={sponsor.image} alt={`${sponsor.name} Logo`} />
            <h3>{sponsor.name}</h3>
            <p>{sponsor.category}</p>
            <a href="#" className="view-details-btn">Visit</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;