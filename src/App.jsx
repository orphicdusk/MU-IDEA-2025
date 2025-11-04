import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PriceAwardsSection from './components/PriceAwardsSection';
import EventsSection from './components/EventsSection';
import RegistrationSection from './components/RegistrationSection';
import ExpertsSection from './components/ExpertsSection';
import SponsorsSection from './components/SponsorsSection';
import SupportedBySection from './components/SupportedBySection';
import LeadersSection from './components/LeadersSection';
import OrganizingTeamSection from './components/OrganizingTeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './components/GlobalStyles.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <main className="main-content">
        <AboutSection />
        <PriceAwardsSection />
        <EventsSection />
        <RegistrationSection />
        <ExpertsSection />
        <SponsorsSection />
        <SupportedBySection />
        <LeadersSection />
        <OrganizingTeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;