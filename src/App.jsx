import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

import './App.css'


export default function App(){
  return (
    <>
      <main>
        <NavBar />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

