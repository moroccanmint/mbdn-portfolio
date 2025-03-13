import BlurBackground from './components/BlurBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

const App = () => {
  return <div>
    <BlurBackground />
    <Navbar />
    <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10'>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <TechStack />
      <Contact />
    </main>
  </div>;
};

export default App;