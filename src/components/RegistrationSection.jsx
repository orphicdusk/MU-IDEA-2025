import React from 'react';
import './RegistrationSection.css';

const RegistrationSection = () => {
  const handleRegisterClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSc3QQowjQnrlxSTs7g0Upd0SzzU8Sv9ZoulHjn3BuiU_g4Zwg/viewform', '_blank');
  };

  return (
    <section id="registration" className="section registration-section">
      <h2>Registration</h2>
      <div className="grid-container registration-card-wrapper">
        <div className="card registration-qr-card">
          <h3>Scan QR to Register</h3>
          <img src="/QR.png" alt="Registration QR Code" className="qr-code-image" />
          <br />
          <button onClick={handleRegisterClick} className="register-link-btn">
            Register With Us <i className="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;