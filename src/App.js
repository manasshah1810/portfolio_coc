import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-b from-bg-sky-start via-clash-blue-pale to-bg-sky-end min-h-screen text-[#4a3b2a] bg-clouds bg-fixed">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pb-20 flex flex-col gap-24">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Philosophy />
        <Footer />
      </main>
    </div>
  );
}

export default App;
