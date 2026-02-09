import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CurrentlyWorkingOn from './components/CurrentlyWorkingOn';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-navy min-h-screen selection:bg-teal selection:text-navy-lighter">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <CurrentlyWorkingOn />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
