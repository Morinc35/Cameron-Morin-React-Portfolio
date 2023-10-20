import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
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
      </main>
    </>
  );
}

