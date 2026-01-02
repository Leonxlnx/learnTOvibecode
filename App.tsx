
import React from 'react';
import Hero from './sections/Hero';
import ProblemSection from './sections/ProblemSection';
import ContentSection from './sections/ContentSection';
import CardNav from './components/ui/CardNav';

const App = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <main className="bg-[#050505] text-primary selection:bg-white selection:text-black antialiased">
       <CardNav
        // Used a text logo fallback within component, passing undefined for logo image
        logoAlt="VIBECODE Logo"
        items={items}
        baseColor="#ffffff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      <Hero />
      <ProblemSection />
      <ContentSection />
    </main>
  );
};

export default App;