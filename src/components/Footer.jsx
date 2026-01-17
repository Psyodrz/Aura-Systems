import React from 'react';
import logo from '../assets/logo.png';

import { useState } from 'react';

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (title, content) => {
    setModalContent({ title, content });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <footer style={{ borderTop: '1px solid var(--color-border)', padding: '6rem 0 2rem', marginTop: '4rem', backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          
          {/* Column 1: Brand */}
          <div>
            <div className="logo" style={{ height: '30px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                 <img src={logo} alt="Aura Systems" style={{ height: '100%', width: 'auto' }} />
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '280px' }}>
              Aura Systems delivers mission-critical security infrastructure for high-risk environments. We design, build, and maintain the systems that protect your assets.
            </p>
          </div>

          {/* Column 2: Address/Contact */}
          <div>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.05em', fontWeight: 600 }}>Headquarters</h4>
              <address style={{ fontStyle: 'normal', fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  526/4B/2 Rajapur Unchwagari<br />
                  Stanily Road<br />
                  Prayagraj, UP - 211011<br />
                  India<br />
                  <br />
                  <strong>Phone:</strong> +91 7518881824
              </address>
               <div style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
                   <a href="mailto:aurasystems1824@gmail.com" style={{ textDecoration: 'underline' }}>aurasystems1824@gmail.com</a>
               </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.05em', fontWeight: 600 }}>Company</h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#services">Capabilities</a></li>
              <li><a href="#process">Operations</a></li>
              <li><a href="#contact">Consultation</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

           {/* Column 4: Compliance */}
           <div>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.05em', fontWeight: 600 }}>Compliance</h4>
              <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>ISO 27001 Certified</li>
                <li>BIS Compliant Hardware</li>
                <li>Safety Standard Class A</li>
              </ul>
            </div>
        </div>

        <div className="container" style={{ borderTop: '1px solid #E5E5E5', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
          <div>
              © {new Date().getFullYear()} Aura Systems. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
              <button onClick={() => openModal('Privacy Policy', 'We value your privacy. Your data is handled according to ISO 27001 standards. We do not share your information with third parties without explicit consent.')} style={{ cursor: 'pointer', color: 'inherit' }}>Privacy Policy</button>
              <button onClick={() => openModal('Terms of Service', 'By using our services, you agree to our standard operating procedures and non-disclosure agreements where applicable. All installations are subject to local defence regulations.')} style={{ cursor: 'pointer', color: 'inherit' }}>Terms of Service</button>
              <button onClick={() => openModal('Site Architecture', (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '1rem 0' }}>
                      {/* Level 1: Home */}
                      <div style={{ border: '1px solid var(--color-accent)', padding: '0.5rem 1.5rem', color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>AURA SYSTEM CORE</div>
                      
                      {/* Connector Vert */}
                      <div style={{ height: '2rem', width: '1px', backgroundColor: '#333' }}></div>
                      
                      {/* Level 2: Branches */}
                      <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid #333', paddingTop: '2rem', width: '100%', justifyContent: 'center' }}>
                          
                          {/* Branch 1: Identity */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                              <span style={{ color: '#666', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Identity</span>
                              <a href="#about" style={{ color: '#ddd', fontSize: '0.9rem', padding: '0.25rem 0.5rem', border: '1px solid #333', width: '100%', textAlign: 'center', textDecoration: 'none' }}>About Us</a>
                              <a href="#whyus" style={{ color: '#ddd', fontSize: '0.9rem', padding: '0.25rem 0.5rem', border: '1px solid #333', width: '100%', textAlign: 'center', textDecoration: 'none' }}>Why Us</a>
                              <a href="#clients" style={{ color: '#ddd', fontSize: '0.9rem', padding: '0.25rem 0.5rem', border: '1px solid #333', width: '100%', textAlign: 'center', textDecoration: 'none' }}>Clients</a>
                          </div>

                          {/* Branch 2: Operations */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                              <span style={{ color: '#666', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Operations</span>
                              <a href="#services" style={{ color: '#ddd', fontSize: '0.9rem', padding: '0.25rem 0.5rem', border: '1px solid #333', width: '100%', textAlign: 'center', textDecoration: 'none' }}>Services</a>
                              <a href="#projects" style={{ color: '#ddd', fontSize: '0.9rem', padding: '0.25rem 0.5rem', border: '1px solid #333', width: '100%', textAlign: 'center', textDecoration: 'none' }}>Projects</a>
                              <a href="#process" style={{ color: '#ddd', fontSize: '0.9rem', padding: '0.25rem 0.5rem', border: '1px solid #333', width: '100%', textAlign: 'center', textDecoration: 'none' }}>Process</a>
                          </div>

                          {/* Branch 3: Engagement */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                              <span style={{ color: '#666', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Engagement</span>
                              <a href="#contact" style={{ color: '#ddd', fontSize: '0.9rem', padding: '0.25rem 0.5rem', border: '1px solid #333', width: '100%', textAlign: 'center', textDecoration: 'none' }}>Contact</a>
                              <a href="#careers" style={{ color: '#ddd', fontSize: '0.9rem', padding: '0.25rem 0.5rem', border: '1px solid #333', width: '100%', textAlign: 'center', textDecoration: 'none' }}>Careers</a>
                          </div>

                      </div>
                  </div>
              ))} style={{ cursor: 'pointer', color: 'inherit' }}>Sitemap</button>
          </div>
        </div>
      </footer>

      {/* Styled Modal */}
      {modalContent && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)', 
          backdropFilter: 'blur(5px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 9999
        }} onClick={closeModal}>
          <div style={{
            backgroundColor: '#1a1a1a', 
            color: '#f4f4f4',
            padding: '3rem', 
            maxWidth: '600px', 
            width: '90%',
            border: '1px solid #333',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            position: 'relative'
          }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)' }}>
                    {modalContent.title}
                </h3>
                <button onClick={closeModal} style={{ color: '#666', fontSize: '1.5rem', lineHeight: 1 }}>&times;</button>
            </div>
            
            <div style={{ lineHeight: 1.8, color: '#aaa', fontSize: '1rem', whiteSpace: 'pre-line' }}>
                {modalContent.content}
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'right' }}>
                <button onClick={closeModal} style={{
                  border: '1px solid #444', 
                  color: '#fff', 
                  padding: '0.75rem 2rem', 
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: '0.2s'
                }}>
                    Acknowledge
                </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
