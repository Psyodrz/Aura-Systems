import React from 'react';

const sectors = [
  {
      name: "Defence & Government",
      subs: ["Military Bases", "Border Control Posts", "Govt. Administrative Complexes"]
  },
  {
      name: "Industrial & Manufacturing",
      subs: ["Petrochemical Plants", "Automotive Factories", "Warehousing & Logistics"]
  },
  {
      name: "Commercial & Corporate",
      subs: ["Data Centers", "Tech Parks", "Banking & Financial HQs"]
  },
  {
      name: "Infrastructure & Utilities",
      subs: ["Power Grids & Substations", "Water Treatment Facilities", "Transport Hubs"]
  }
];

const Industries = () => {
  return (
    <section className="industries section" style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '6rem 0' }}>
      <div className="container">
        <h2 className="section-header">Sectors Served</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {sectors.map((sector, i) => (
            <div key={i} className="content-card" style={{ padding: '2rem', border: '1px solid #D1D1D1', backgroundColor: 'var(--color-bg-primary)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 700 }}>{sector.name}</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                  {sector.subs.map((sub, j) => (
                      <li key={j} style={{ marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center' }}>
                          <span style={{ width: '6px', height: '1px', backgroundColor: 'var(--color-text-secondary)', marginRight: '0.5rem' }}></span>
                          {sub}
                      </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
