import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=7573042213&text&type=phone_number&app_absent=0&wame_ctl=1', '_blank');
  };

  return (
    <section id="contact" className="section combined-details">
      <h2>Contact</h2>
      
      {/* Google Maps Section */}
      <div className="map-section">
        <h3 className="map-title">
          <i className="fas fa-location-dot"></i> Find Us on Map
        </h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.736640829963!2d70.76840407592664!3d22.289399879684834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b5f11e1d67e5%3A0x32e17dfe1f9df478!2sMarwadi%20University!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
            className="google-map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Marwadi University Location"
          ></iframe>
          <a 
            href="https://www.google.com/maps?s=web&lqi=ChttYXJ3YWRpIHVuaXZlcnNpdHkgbG9jYXRpb25I-rv9zvGtgIAIWiQQABABGAAYASISbWFyd2FkaSB1bml2ZXJzaXR5KgYIAhAAEAGSARJwcml2YXRlX3VuaXZlcnNpdHmqATsQATIfEAEiG_MhXg3ZPIaJiItDlIuzq0_Jj7rx2rx0i1ENdTIWEAIiEm1hcndhZGkgdW5pdmVyc2l0eQ&vet=12ahUKEwjfv_yf4NCQAxUlR2wGHV2jNgIQ1YkKegQIGRAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KRXlHHZyyVk5Mfj0nR7-41E2&daddr=Marwadi+University,+Rajkot,+Gujarat+360003"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link-btn"
          >
            <i className="fas fa-directions"></i> Get Directions
          </a>
        </div>
      </div>

      <div className="grid-container details-grid-wrapper">
        <div className="card detail-block location-card">
          <h3><i className="fas fa-map-marker-alt"></i> Location & Time</h3>
          <br />
          <p><strong>Marwadi University Campus,</strong></p>
          <p>Rajkot-Morbi Highway, Rajkot, Gujarat, India</p>
          <p className="detail-highlight"><strong>Date:</strong> 29 - 30 November 2025</p>
          <p><strong>Time:</strong> 09:00 AM - 06:00 PM (IST)</p>
        </div>

        <div className="card detail-block contact-card">
          <h3><i className="fas fa-envelope"></i> Event Contacts</h3>
          <br />
          <p><strong>Coordinator :</strong> Prof. Vivek Patel</p>
          <p><strong>Phone:</strong> <a href="tel:+917573042213">+91 75730 42213</a></p>
          <p><strong>E-Mail : </strong> <a href="mailto:vivekg.patel@marwadieducation.edu.in">vivekg.patel@marwadieducation.edu.in</a></p>
          <div className="social-links-footer">
            <button onClick={handleWhatsAppClick} className="footer-social-btn whatsapp-btn">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;