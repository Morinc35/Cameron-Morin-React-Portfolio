import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Footer from './components/Footer';
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

