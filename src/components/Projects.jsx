import React from 'react';

// Using placeholders or existing industrial images effectively
const projects = [
    {
        title: "Naval Dockyard Perimeter",
        location: "Mumbai, India",
        desc: "Implementation of 5km Electric Smart Power Fence with integrated thermal surveillance.",
        status: "Completed"
    },
    {
        title: "Critical Petrochemical Refinery",
        location: "Jamnagar, Gujarat",
        desc: "Deployment of 500+ ATEX-rated cameras and centralized command & control center.",
        status: "Operational"
    },
    {
        title: "Urban Mass Transit System",
        location: "Delhi NCR",
        desc: "Face recognition access control nodes processing 100,000+ daily commuters.",
        status: "Maintenance Phase"
    }
];

const Projects = () => {
  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="container">
         <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
             Selected Projects
         </h2>
         
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
             {projects.map((p, i) => (
                 <div key={i} style={{ 
                     backgroundColor: 'var(--color-bg-primary)', 
                     padding: '2rem', 
                     border: '1px solid var(--color-border)',
                     transition: 'transform 0.2s ease'
                 }}>
                     <span style={{ 
                         fontSize: '0.75rem', 
                         fontWeight: 700, 
                         color: 'var(--color-accent)', 
                         textTransform: 'uppercase',
                         display: 'block',
                         marginBottom: '0.5rem'
                     }}>
                         {p.status}
                     </span>
                     <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                     <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}>{p.location}</p>
                     <p style={{ lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>{p.desc}</p>
                 </div>
             ))}
         </div>
         
         <div style={{ marginTop: '3rem', textAlign: 'center' }}>
             <p style={{ display: 'inline-block', borderBottom: '1px solid var(--color-text-primary)' }}>
                 + 45 High-Security Installations Confidential under NDA
             </p>
         </div>
      </div>
    </section>
  );
};

export default Projects;
