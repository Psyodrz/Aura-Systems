import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = 'service_fi18p6r';
    const TEMPLATE_ID = 'template_cdm2yzk';
    const PUBLIC_KEY = 'M8mmgll9RQWieY_SY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          // Reset form after delay
          setTimeout(() => setStatus(''), 5000);
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <section id="contact" className="contact container section">
      <div className="contact-container">
        <div>
          <h2 className="section-header" style={{ fontSize: '2rem', borderBottom: 'none' }}>Initiate Consultation</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
            Strict confidentiality is maintained for all inquiries.
          </p>
          
          {/* Status Messages */}
          {status === 'sending' && <p style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Encrypting & Transmitting Request...</p>}
          {status === 'success' && <p style={{ color: 'green', fontWeight: 600 }}>✓ Request Securely Transmitted. We will establish contact shortly.</p>}
          {status === 'error' && <p style={{ color: 'red', fontWeight: 600 }}>⚠ Transmission Failed. Please check console or try again.</p>}
        </div>

        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Full Name</label>
            <input type="text" name="user_name" required style={{ padding: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'transparent' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Organization</label>
            <input type="text" name="user_org" required style={{ padding: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'transparent' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
             <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Email (Official)</label>
             <input type="email" name="user_email" required style={{ padding: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'transparent' }} />
          </div>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
             <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Requirement Brief</label>
             <textarea name="message" rows="4" required style={{ padding: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'transparent' }}></textarea>
          </div>
          <button type="submit" disabled={status === 'sending' || status === 'success'} style={{ 
            alignSelf: 'flex-start',
            backgroundColor: status === 'success' ? '#222' : 'var(--color-text-primary)', 
            color: 'var(--color-bg-primary)', 
            padding: '1rem 2rem', 
            fontWeight: 600,
            marginTop: '1rem',
            border: 'none',
            cursor: status === 'sending' || status === 'success' ? 'default' : 'pointer',
            opacity: status === 'sending' ? 0.7 : 1
          }}>
            {status === 'sending' ? 'Transmitting...' : status === 'success' ? 'Request Sent' : 'Submit Request'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
