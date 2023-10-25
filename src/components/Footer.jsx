export default function Footer() {
return(
    <footer style={{ backgroundColor: '#506C64',  position: 'fixed', bottom: '0', left: '0', right: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'monospace', textAlign: 'center' }}>
    <div className="footer-image is-flex">
      <a className="image is-48x48 mx-3" href='https://github.com/Morinc35'><img src="/icons8-github-96.png" alt="GitHub" /></a>
      <a className="image is-48x48 mx-3" href='https://www.linkedin.com/in/cameron-morin-58aba01a5/'><img src="/icons8-linkedin-96.png" alt="LinkedIn" /></a>
      <a className="image is-48x48 mx-3" href="https://stackoverflow.com/users/22803749/cameron-morin"><img src="/icons8-stack-overflow-50.png" alt="stackoverflow logo" /></a>
    </div>
    <ul style={{ display: 'flex', justifyContent: 'center', fontFamily: 'monospace' }}>
      <li>
        <h1 className="footer-react has-text-black">Made using React</h1>
        <h1 className='footer-icons has-text-black'>Icons from <a className="icon-link has-text-black is-underlined" href="https://icons8.com/">icons8</a></h1>
      </li>
    </ul>
  </footer>
)
}