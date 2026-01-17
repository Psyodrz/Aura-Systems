import React from 'react';

const WhyUs = () => {
  return (
    <section className="why-us container section">
      <div className="section-intro">
        <h2 className="section-header" style={{ marginBottom: '2rem', borderBottom: 'none' }}>The Aura Standard</h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
          In an industry flooded with consumer-grade electronics repackaged as "security solutions," Aura Systems stands apart. We do not experiment with unproven technology. We implement what works, what lasts, and what protects.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
           <div className="content-card">
             <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-primary)' }}>Hardware Agnostic</h3>
             <p style={{ lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                 We are not tied to a single manufacturer. This independence allows us to select the absolute best-in-class components for your specific threat profile, whether that’s FLIR thermal optics, Bosch analytic cameras, or Honeywell access controllers.
             </p>
           </div>
           <div className="content-card">
             <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-primary)' }}>Redundancy by Default</h3>
             <p style={{ lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                 Our systems are designed to assume failure. We engineer redundant power supplies, RAID storage failovers, and mesh network topologies to ensure that a single point of failure never compromises the perimeter.
             </p>
           </div>
           <div className="content-card">
             <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-primary)' }}>Discretion & Vetting</h3>
             <p style={{ lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                 Our workforce is securely vetted. We understand the sensitivity of government and defence projects. Data handling, blueprint storage, and site access are managed with strict compartmentalization protocols.
             </p>
           </div>
      </div>
    </section>
  );
};

export default WhyUs;
