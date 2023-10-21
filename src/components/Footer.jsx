export default function Footer() {
return(
    <footer style={{backgroundColor:'#6b6a6a',}}>
    <div className="footer-image" style={{display: "flex", justifyContent: 'center'}}>
    <a className="image is-48x48 mx-3" href='https://github.com/Morinc35'><img src="src\assets\icons8-github-96.png"  alt=""></img></a>
    <a className="image is-48x48 mx-3" href='https://www.linkedin.com/in/cameron-morin-58aba01a5/'><img src="src\assets\icons8-linkedin-96.png" alt=""></img></a>
    <a className="image is-48x48 mx-3"><img src="src\assets\icons8-gmail-50.png" alt=""></img></a>
    </div>
    <div style={{
        fontFamily: 'monospace',
        direction: 'flex',
    }}>
    <a className="footer-text has-text-black">Made using React</a><a></a>   
    </div>

    </footer>
)
}