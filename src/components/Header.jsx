import React from 'react';
import logo from '../assets/logo.png';

// Dynamic import for the texture (same as Hero)
const images = import.meta.glob('../assets/images/*hero*', { eager: true });
const heroTexture = Object.values(images)[0]?.default;

const Header = () => {
  return (
    <header className="header" style={{ 
        position: 'relative', 
        zIndex: 1000,
        // borderBottom removed for seamless look
    }}>
      {/* Background Base Layer (Glass Effect) */}
      <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(244, 244, 244, 0.95)',
          backdropFilter: 'blur(10px)',
          zIndex: 0
      }}></div>

      {/* Texture Layer (Matching Hero Opacity) */}
      <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: heroTexture ? `url(${heroTexture})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Seamless alignment
          opacity: 0.4, // Matches Hero Section
          zIndex: 1,
          pointerEvents: 'none'
      }}></div>

      <div className="container header-inner" style={{ 
          position: 'relative', 
          zIndex: 2, 
          // Removed inline flex definitions to let CSS handle it
      }}>
        <div className="logo" style={{ height: '40px', display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Aura Systems" style={{ height: '100%', width: 'auto', display: 'block' }} />
        </div>
        <nav className="header-nav">
            {['About', 'Services', 'Projects', 'Clients'].map((item) => (
                <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(item.toLowerCase());
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-text-secondary)', cursor: 'pointer' }}
                >
                    {item === 'About' ? 'About Us' : item}
                </a>
            ))}
            <a 
                href="#contact" 
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ 
                    padding: '0.75rem 1.5rem', 
                    backgroundColor: 'var(--color-text-primary)', 
                    color: 'var(--color-bg-primary)', 
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                }}
            >
                Consultation
            </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
