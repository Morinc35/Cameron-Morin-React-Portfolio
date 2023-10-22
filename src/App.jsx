import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';


import './App.css'


export default function App(){
  return (
    <>
    <NavBar />
      <main>
      <Outlet/>
      </main>
      <Footer />
    </>
  );
}

