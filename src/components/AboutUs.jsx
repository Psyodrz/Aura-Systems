import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="container">
        <div className="section-intro">
          <span style={{ 
             display: 'inline-block', 
             marginBottom: '1rem', 
             fontSize: '0.875rem', 
             fontWeight: 600, 
             color: 'var(--color-accent)',
             textTransform: 'uppercase',
             letterSpacing: '0.1em'
          }}>
             About Aura Systems
          </span>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: 1.1 }}>
             Building the Shield for <br />
             <span style={{ color: 'var(--color-text-secondary)' }}>National & Industrial Security.</span>
          </h2>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--color-text-secondary)', marginBottom: '3rem' }}>
             Aura Systems was founded on a singular doctrine: <strong>Security is non-negotiable.</strong> We are not just integrators; we are strategic partners in defence. From securing naval dockyards to hardening petrochemical refineries, our mission is to deliver failure-proof infrastructure that stands when everything else falls.
          </p>
          
          <div className="about-grid">
             <div className="content-card">
                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>12+ Years</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Operational Excellence in High-Risk Zones</p>
             </div>
             <div className="content-card">
                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Zero Breaches</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Across all Aura-protected perimeters</p>
             </div>
             <div className="content-card">
                 <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>ISO 27001</h4>
                 <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Certified Information Security Standards</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
