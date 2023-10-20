import About from '../pages/About';

export default function NavBar() {

   return(
 <header>
    <nav className='navbar' aria-label="main navigation">
     <ul className='navbar-start'
     style={{
      display: 'flex',
      marginTop: '.68em',
     }}>
     <a id="nav-html" className="image"><img src="src\assets\icons8-html-50.png" alt="HTML Logo"></img></a>
     <a id="nav-css" className="image"><img src="src\assets\icons8-css-50.png" alt="CSS Logo"></img></a>
     <a id="nav-js" className="image"><img src="src\assets\icons8-javascript-50.png" alt="Javascript Logo"></img></a>
     </ul>

     <ul className= 'navbar-end' style={{
      fontFamily: "monospace",
      fontSize: '20px',
      display: 'flex',
      margin: '.75rem',
      
     }}>
      <li className="navbar-item">
     <a className="about-me has-text-black" href={About}>About Me</a>
     </li> 
     <li className="navbar-item">
     <a className="projects has-text-black">Projects</a>
     </li> 
     <li className="navbar-item">
     <a className="resume has-text-black">Resume</a>
     </li> 
     <li className="navbar-item">
     <a className="contact-me has-text-black">Contact Me</a>
     </li> 
     </ul>
    </nav>
 </header>
   );
}