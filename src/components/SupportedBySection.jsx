import React from 'react';
import './SupportedBySection.css';

const SupportedBySection = () => {
  const partners = [
    { id: 1, name: 'Partner Logo 1', image: '/SupportedBy_Logos/SSIP.png' },
    { id: 2, name: 'Partner Logo 2', image: '/SupportedBy_Logos/IIC.png' },
    { id: 3, name: 'Partner Logo 3', image: '/SupportedBy_Logos/GVFL.png' },
    { id: 4, name: 'Partner Logo 4', image: '/SupportedBy_Logos/GSBTM.png' },
    { id: 5, name: 'Partner Logo 5', image: '/SupportedBy_Logos/icreate.png' },
    { id: 6, name: 'Partner Logo 6', image: '/SupportedBy_Logos/savli.png' },
    { id: 7, name: '24/7 VC', image: '/SupportedBy_Logos/247vc.png' },
    { id: 8, name: 'IC', image: '/SupportedBy_Logos/IC.png' },
    { id: 9, name: 'IN44', image: '/SupportedBy_Logos/IN44.png' },
    { id: 10, name: 'RMA', image: '/SupportedBy_Logos/RMA.png' }
  ];

  return (
    <section id="supported" className="section supported-by-section">
      <h2>Supported By</h2>
      <div className="logo-slider-container">
        <div className="logo-slider-track">
          {/* First set of logos */}
          {partners.map(partner => (
            <div key={partner.id} className="logo-item">
              <img src={partner.image} alt={partner.name} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map(partner => (
            <div key={`duplicate-${partner.id}`} className="logo-item">
              <img src={partner.image} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedBySection;