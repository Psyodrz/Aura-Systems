import React from 'react';

const positions = [
    {
        title: "Senior Security Systems Architect",
        location: "New Delhi (HQ)",
        type: "Full-time"
    },
    {
        title: "Field Operations Engineer (Industrial)",
        location: "Mumbai / Gujarat",
        type: "On-Site"
    },
    {
        title: "LIDAR & Photogrammetry Specialist",
        location: "Remote / Hybrid",
        type: "Full-time"
    }
];

const Careers = () => {
  return (
    <section id="careers" className="section" style={{ backgroundColor: '#111', color: '#fff', padding: '6rem 0' }}>
      <div className="container">
      <div className="careers-container">
        <div className="careers-intro-block">
            <span style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>Careers</span>
            <h2 style={{ fontSize: '3rem', marginTop: '1rem', lineHeight: 1.1 }}>Join The Vanguard.</h2>
        </div>
        <p className="careers-description">
            We don't just hire employees; we recruit personnel for high-stakes missions. If you demand excellence and thrive in critical environments, apply below.
        </p>
        <div className="careers-listings" style={{ borderTop: '1px solid #333' }}>
            {positions.map((px, i) => (
                <div key={i} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '2rem 0', 
                    borderBottom: '1px solid #333',
                    transition: '0.3s'
                }}>
                    <div>
                        <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{px.title}</h4>
                        <span style={{ fontSize: '0.9rem', color: '#888' }}>{px.location} • {px.type}</span>
                    </div>
                    <a 
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            const subject = `Application: ${px.title}`;
                            const body = `I am interested in the ${px.title} position at ${px.location}. Please find my details attached.`;
                            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=aurasystems1824@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                            window.open(gmailUrl, '_blank');
                        }}
                        style={{ 
                            border: '1px solid #fff', 
                            color: '#fff', 
                            padding: '0.75rem 2rem', 
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}
                    >
                        Apply
                    </a>
                </div>
            ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Careers;
