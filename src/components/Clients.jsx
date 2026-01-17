import React from 'react';

const clients = [
    "Ministry of Defence",
    "National Government",
    "Samsung",
    "CP Plus",
    "Ancord"
];

const Clients = () => {
  return (
    <section id="clients" className="section" style={{ backgroundColor: 'var(--color-bg-primary)', padding: '5rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Trusted By</h2>
        
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '1px', 
            backgroundColor: 'var(--color-border)',
            border: '1px solid var(--color-border)'
        }}>
            {clients.map((client, i) => (
                <div key={i} style={{ 
                    backgroundColor: 'var(--color-bg-primary)', 
                    padding: '3rem 2rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)'
                }}>
                    {client}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
