import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CurrentlyWorkingOn from './components/CurrentlyWorkingOn';
import Blog from './components/Blog';
import Skills from './components/Skills';
import LookingFor from './components/LookingFor';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Initialize smooth scrolling
  useSmoothScroll();

  const handleOpenContact = () => setIsContactOpen(true);

  return (
    <div className="App bg-navy min-h-screen selection:bg-teal selection:text-navy-lighter">
      <Navbar onOpenContact={handleOpenContact} />
      <main className="flex flex-col">
        <Hero onOpenContact={handleOpenContact} />
        <About />
        <Experience />
        <Projects />
        <CurrentlyWorkingOn />
        <Blog />
        <Skills />
        <LookingFor onOpenContact={handleOpenContact} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
