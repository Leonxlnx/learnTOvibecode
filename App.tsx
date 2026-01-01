
import React from 'react';
import Hero from './Hero';
import ProblemSection from './ProblemSection';
import ContentSection from './ContentSection';

// Global types for Three.js in Fiber
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

const App = () => {
  return (
    <main className="bg-[#050505] text-primary selection:bg-white selection:text-black antialiased">
      <Hero />
      <ProblemSection />
      <ContentSection />
    </main>
  );
};

export default App;
