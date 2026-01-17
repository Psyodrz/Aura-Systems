import React from 'react';

const steps = [
  { 
      step: "01", 
      title: "Site Survey & Risk Assessment",
      desc: "Every project begins with a zero-trust assessment of the facility. We deploy LIDAR mapping and thermal drone reconnaissance to identify physical vulnerabilities, blind spots, and environmental challenges before a design is proposed."
  },
  { 
      step: "02", 
      title: "System Design & Architecture", 
      desc: "Our engineers design a bespoke security ecosystem using CAD and BIM modeling. We select hardware based on MTBF (Mean Time Between Failures) and environmental ratings, ensuring longevity in harsh industrial conditions."
  },
  { 
      step: "03", 
      title: "Installation & Integration", 
      desc: "Execution is handled by our vetted in-house teams. Cable routing is armored; server racks are organized for airflow and access. We integrate disparate systems (CCTV, Access, PIDS) into a unified command and control interface."
  },
  { 
      step: "04", 
      title: "Testing, Handover & Maintenance", 
      desc: "We perform rigorous penetration testing and stress testing of the network. Post-handover, we provide comprehensive documentation, adherence to strict SLAs, and preventive maintenance schedules."
  },
  {
      step: "05",
      title: "Operator Training & SOPs",
      desc: "Technology is only effective if used correctly. We conduct intensive training programs for your security personnel, establishing Standard Operating Procedures (SOPs) for thread response and system monitoring."
  },
  {
      step: "06",
      title: "Lifecycle Support & Upgrades",
      desc: "Security is an evolving landscape. We provide continuous firmware updates, cybersecurity patching, and strategic hardware rotation plans to ensure your infrastructure remains ahead of emerging threats."
  }
];

const HowWeWork = () => {
  return (
    <section id="process" className="process container section">
       <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', marginBottom: '4rem' }}>
           <h2 style={{ fontSize: '2.5rem', borderLeft: '4px solid var(--color-accent)', paddingLeft: '2rem' }}>Operational<br />Methodology</h2>
           <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
               We do not believe in 'one-size-fits-all'. Our methodology is born from decades of field experience in hostile and high-compliance environments. We follow a rigid military-grade doctrine of assessment, design, and execution.
           </p>
       </div>
       
       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
         {steps.map((s, i) => (
           <div key={i} style={{ position: 'relative', paddingRight: '1rem' }}>
             <span style={{ 
                 display: 'block', 
                 fontSize: '3rem', 
                 color: 'var(--color-accent)', 
                 fontWeight: 800, 
                 marginBottom: '1rem',
                 opacity: 1
             }}>{s.step}</span>
             <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>{s.title}</h3>
             <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{s.desc}</p>
           </div>
         ))}
       </div>
    </section>
  );
};

export default HowWeWork;
