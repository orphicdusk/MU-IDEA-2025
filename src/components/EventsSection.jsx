import React from 'react';
import './EventsSection.css';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      image: '/1.png',
      title: 'Startup Pitching',
      time: '(Minutes to Money - M2M)',
      description: 'Demo your product/idea to investors in the high-stakes "Minutes to Money" competition.'
    },
    {
      id: 2,
      image: '/2.png',
      title: 'Innovation Exhibition',
      time: '(Innovate to Impress - I2I)',
      description: 'A showcase where innovators exhibit their concepts to a wide audience of industry leaders.'
    },
    {
      id: 3,
      image: '/3.png',
      title: 'Technology Fair',
      time: 'Day 1 & 2',
      description: 'Explore cutting-edge technology and future trends from leading tech companies and startups.'
    },
    {
      id: 4,
      image: '/4.png',
      title: 'Incubator Summit',
      time: 'Connect & Collaborate',
      description: 'A gathering of 50+ Incubators and accelerators to discuss the future of startup support.'
    },
    {
      id: 5,
      image: '/5.png',
      title: 'Expert Sessions',
      time: '(Inspire to Impact - I2I)',
      description: 'Deep-dive talks and mentorship from domain experts and industry veterans.'
    },
    {
      id: 6,
      image: '/6.png',
      title: 'Panel Discussions',
      time: 'Fireside Chats',
      description: 'Engaging debates and insightful conversations with top CEOs and founders.'
    },
    {
      id: 7,
      image: '/7.png',
      title: 'Investor Conclave',
      time: 'Funding Opportunities',
      description: 'Dedicated forum for startups to meet and pitch directly to 100+ strategic investors.'
    },
    {
      id: 8,
      image: '/8.png',
      title: 'Workshops',
      time: '(Listen to Learn - L2L)',
      description: 'Hands-on sessions covering essential skills like product-market fit and financial modeling.'
    },
    {
      id: 9,
      image: '/9.png',
      title: 'Networking',
      time: '(Network to Nurture - N2N)',
      description: 'Organized sessions to connect delegates, speakers, and potential partners.'
    }
  ];

  return (
    <section id="events" className="section">
      <h2>Events</h2>
      <div className="grid-container events-grid">
        {events.map(event => (
          <div key={event.id} className="card vertical-event-card">
            <div className="card-icon">
              <img src={event.image} alt={`${event.title} Logo`} className="event-logo" />
            </div>
            <h3>{event.title}</h3>
            <p className="event-time">{event.time}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;