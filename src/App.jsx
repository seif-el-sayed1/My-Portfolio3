import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
// import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-primary text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <AboutMe />
      {/* <Contact /> */}
      
      <footer className="py-12 text-center text-gray-500 border-t border-white/10">
        Let’s build something amazing together. Tell me about your project.
      </footer>
    </div>
  );
}

export default App;