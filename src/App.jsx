import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import HowWeWork from "./components/HowWeWork";
import Industries from "./components/Industries";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Careers from "./components/Careers";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Projects />
        <Clients />
        <HowWeWork />
        <Industries />
        <WhyUs />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
