import About from '../pages/About';

export default function NavBar() {

   return(
 <header>
    <nav className='navbar' aria-label="main navigation">
     <>
     <a id="nav-html" className="navbar-item "><img src="src\assets\icons8-html-50.png" alt="HTML Logo"></img></a>
     <a id="nav-css" className="navbar-item"><img src="src\assets\icons8-css-50.png" alt="CSS Logo"></img></a>
     <a id="nav-js" className="navbar-item"><img src="src\assets\icons8-javascript-50.png" alt="Javascript Logo"></img></a>
     </>

     <ul style={{
      fontFamily: "monospace",
      fontSize: '20px',
      paddingRight: '20px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
     }}>
      <li className="navbar-item">
     <a className="about-me has-text-black" href={About}>About Me</a>
     </li> 
     <li className="navbar-item">
     <a className="about-me has-text-black">Projects</a>
     </li> 
     <li className="navbar-item">
     <a className="about-me has-text-black">Resume</a>
     </li> 
     <li className="navbar-item">
     <a className="about-me has-text-black">Contact Me</a>
     </li> 
     </ul>
    </nav>
 </header>
   );
}