import React from 'react';

// Import images
// Note: We need to handle the filenames dynamically or just map them since I know the names.
// I will assume the copy command worked and files are in src/assets/images/
// Timestamps in filenames might be tricky if I don't know them exact.
// Wait, the copy command preserved filenames with timestamps.
// I should use a dirty glob import or just rename them in a real scenario.
// For now, I will assume the copy command copied them as is.
// To be safe, I should list the directory or just use the glob import feature of Vite.

const images = import.meta.glob('../assets/images/*.png', { eager: true });

// Helper to find image by partial name
const getImage = (partialName) => {
  const key = Object.keys(images).find(k => k.includes(partialName));
  return key ? images[key].default : '';
};

const services = [
  { 
    title: "CCTV Project Handling", 
    image: "cctv_site_survey",
    desc: "We provide comprehensive lifecycle management for large-scale surveillance networks. Unlike basic installers, Aura Systems approaches CCTV as a strategic intelligence asset. Our process begins with high-fidelity site surveying using LIDAR and photogrammetry to eliminate blind spots before a single camera is mounted.",
    details: [
        "Site Survey & Coverage Analysis (LIDAR/Thermal)",
        "Network Architecture Design (Fiber/Wireless/Hybrid)",
        "Command Center Integration",
        "Legacy System Migration & Retrofitting"
    ]
  },
  { 
    title: "Security System Installation", 
    image: "security_install",
    desc: "Precision installation services for high-risk environments. Our field teams are certified for hazardous and industrial zones, ensuring that security infrastructure does not compromise operational safety. We handle everything from perimeter intrusion detection systems (PIDS) to biometric access control nodes.",
    details: [
        "Perimeter Intrusion Detection Systems (PIDS)",
        "Biometric & Smart Card Access Control",
        "Automated Gates & Barriers",
        "Anti-Ram Vehicle Bollards"
    ]
  },
  { 
    title: "Security Maintenance & AMC", 
    image: "maintenance_server",
    desc: "A security system is only as reliable as its maintenance. We offer rigid Annual Maintenance Contracts (AMCs) guaranteed to strictly defined Service Level Agreements (SLAs). Our proactive diagnostics prevent downtime in mission-critical feeds and ensure data integrity for compliance audits.",
    details: [
        "24/7 Rapid Response Support",
        "Preventive Hardware Diagnostics",
        "Firmware & Cybersecurity Patching",
        "Compliance Reporting & Auditing"
    ]
  },
  { 
    title: "Specialized Security Equipment", 
    image: "specialized_equipment",
    desc: "Supply and integration of non-standard, defence-grade hardware. From thermal imaging units capable of detecting intruders at 2km range to explosion-proof housing for petrochemical facilities, we source and validate equipment that standard vendors cannot provide.",
    details: [
        "Long-Range Thermal Imaging",
        "Explosion-Proof (ATEX) Cameras",
        "Under-Vehicle Scanning Systems (UVSS)",
        "X-Ray Baggage & Cargo Scanners"
    ]
  },
  { 
    title: "Infrastructure Design", 
    image: "infrastructure_design",
    desc: "We design security into the architectural blueprint. Working alongside civil engineers and architects, we create 'Security by Design' frameworks that integrate physical hardening with electronic surveillance, minimizing aesthetic impact while maximizing target hardening.",
    details: [
        "Threat Modeling & Risk Assessment",
        "Security Architecture Blueprints (CAD/BIM)",
        "Blast Mitigation Consulting",
        "CPTED (Crime Prevention Through Environmental Design)"
    ]
  },
  { 
    title: "Infrastructure Implementation", 
    image: "infrastructure_implementation",
    desc: "Turnkey execution of complex security infrastructure projects. We act as the single point of accountability for civil works, electrical trenching, network cabling, and final system integration. Our project managers ensure delivery on time, on budget, and to defence standards.",
    details: [
        "Civil Works & Trenching",
        "Fiber Optic Backbone Laying",
        "Control Room Construction",
        "Final Systems Commissioning & Handover"
    ]
  },
  {
      id: '07',
      title: "Electric Smart Power Fence (ESPF)",
      category: "Perimeter Intrusion Detection",
      desc: "We deploy advanced energized fencing systems that act as both a physical deterrent and an active detection layer. Our ESPF solutions are fully integrated with the central command center, providing instant zone-specific alerts upon attempted breach or tampering. The system utilizes variable voltage regulation to ensure safety while maintaining maximum deterrence. It monitors for cutting, climbing, and short-circuiting attempts with millisecond response times. Designed for critical infrastructure, our power fences are weather-hardened and include redundant power supplies to remain operational during grid failures.",
      details: [
          "Multi-Zone Zoning Logic",
          "Voltage Regulation & Safety",
          "Integration with PIDS",
          "Anti-Climb/Anti-Cut Detection"
      ],
      image: 'perimeter_electric_fence_smart'
  },
  {
      title: "Face Recognition & Biometrics",
      image: "face_recognition_biometric_scan",
      desc: "Deployment of military-grade facial recognition algorithms capable of identifying subjects in high-density crowds and low-light conditions. Our systems integrate with national criminal databases for real-time threat flagging. Beyond security, we implement contactless biometric access control for sensitive zones, replacing vulnerable keycards with liveness-detection enabled facial scanning.",
      details: [
          "Real-Time Watchlist Alerting",
          "Liveness Detection (Anti-Spoofing)",
          "Crowd Analytics & Heatmapping",
          "Contactless Access Control Integration"
      ]
  }
];

const Services = () => {
  return (
    <section id="services" className="services section" style={{ padding: '0' }}>
        <div className="container">
             <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>Core Capabilities</h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {services.map((s, i) => (
            <div key={i} style={{ 
                display: 'flex', 
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                backgroundColor: 'var(--color-bg-primary)',
                minHeight: '600px'
            }}>
              {/* Image Side */}
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                  <div style={{
                      position: 'absolute',
                      top: 0, left: 0, width: '100%', height: '100%',
                      backgroundImage: `url(${getImage(s.image)})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(100%) contrast(1.1) brightness(0.9)', // Defence grade look
                  }} />
              </div>

              {/* Content Side */}
              <div style={{ flex: 1, padding: '4rem 6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{s.title}</h3>
                  <p style={{ 
                      fontSize: '1.125rem', 
                      color: 'var(--color-text-secondary)', 
                      marginBottom: '2rem', 
                      maxWidth: '50ch', 
                      lineHeight: 1.7 
                  }}>
                      {s.desc}
                  </p>
                  <ul style={{ display: 'grid', gap: '0.75rem' }}>
                      {s.details.map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'center', fontWeight: 500 }}>
                              <span style={{ 
                                  height: '4px', width: '4px', backgroundColor: 'var(--color-accent)', 
                                  marginRight: '1rem', display: 'inline-block' 
                              }}></span>
                              {item}
                          </li>
                      ))}
                  </ul>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Services;
