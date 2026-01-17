import React from 'react';

// Dynamic import for the texture
const images = import.meta.glob('../assets/images/*hero*', { eager: true });
const heroTexture = Object.values(images)[0]?.default;

const Hero = () => {
  return (
    <section className="hero" style={{ 
        position: 'relative', 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-border)'
    }}>
      {/* Background with texture */}
      <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: heroTexture ? `url(${heroTexture})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Seamless alignment
          opacity: 0.4, // Increased opacity for better visibility
          zIndex: 0
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 1rem' }}>
        <div style={{ maxWidth: '900px' }}>
             <span style={{ 
                 display: 'inline-block', 
                 marginBottom: '1.5rem', 
                 fontSize: '0.75rem', 
                 textTransform: 'uppercase', 
                 letterSpacing: '0.1em', 
                 fontWeight: 600, 
                 color: 'var(--color-accent)',
                 border: '1px solid var(--color-accent)',
                 padding: '0.25rem 0.75rem'
             }}>
                 Defence-Grade Infrastructure
             </span>
             <h1 style={{ 
                 fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', 
                 fontWeight: 800, 
                 lineHeight: 1.05, 
                 marginBottom: '2rem',
                 letterSpacing: '-0.03em',
                 color: 'var(--color-text-primary)'
             }}>
                Securing High-Risk<br />
                Environments.
             </h1>
             <p style={{ 
                 fontSize: '1.5rem', 
                 color: 'var(--color-text-secondary)', 
                 maxWidth: '65ch', 
                 marginBottom: '3rem',
                 lineHeight: 1.5
             }}>
                Aura Systems delivers end-to-end surveillance, perimeter control, and critical infrastructure protection for government, defence, and industrial sectors.
             </p>
             <div style={{ display: 'flex', gap: '1rem' }}>
                 <a href="#contact" style={{ 
                    display: 'inline-block', 
                    backgroundColor: 'var(--color-text-primary)', 
                    color: 'var(--color-bg-primary)', 
                    padding: '1.25rem 2.5rem', 
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    letterSpacing: '0.02em',
                    border: '1px solid var(--color-text-primary)'
                 }}>
                    Request Consultation
                 </a>
                 <a href="#services" style={{ 
                    display: 'inline-block', 
                    backgroundColor: 'transparent', 
                    color: 'var(--color-text-primary)', 
                    padding: '1.25rem 2.5rem', 
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    letterSpacing: '0.02em',
                    border: '1px solid var(--color-text-primary)'
                 }}>
                    View Capabilities
                 </a>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
