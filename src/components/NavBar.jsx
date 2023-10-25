import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
const currentPage = useLocation().pathname;

return(
 <header>
    <nav className='navbar ' aria-label="main navigation">
     <ul className='navbar-start'
     style={{
      display: 'flex',
      marginTop: '.68em'
     }}>
     <a className="image"><img src="/icons8-html-50.png" alt="HTML Logo"></img></a>
     <a className="image"><img src="/icons8-css-50.png" alt="CSS Logo"></img></a>
     <a className="image"><img src="/icons8-javascript-50.png" alt="Javascript Logo"></img></a>
     </ul>

     <ul className= 'navbar-end' style={{
      fontFamily: "monospace",
      fontSize: '20px',
      display: 'flex',
      margin: '.75rem'
      
     }}>
      <li className="navbar-item">
     <Link style={{color: 'black'}} to='/About' className={currentPage === '/About'}>About Me</Link>
     </li> 
     <li className="navbar-item">
     <Link style={{color: 'black'}} to='/Projects' className={currentPage === '/Projects'}>Projects</Link>
     </li> 
     <li className="navbar-item">
     <Link style={{color: 'black'}} to='https://docs.google.com/document/d/1trwySpB4SZ-oCpn0cX4sTsZ2Fgb8CDG5AGnaDo6Y-uM/export?format=pdf'>Resume</Link>
     </li> 
     <li className="navbar-item">
     <Link style={{color: 'black'}} to='/Contact' className={currentPage === '/Contact'}>Contact Me</Link>
     </li> 
     </ul>
    </nav>
 </header>
   );
}