export default function About() {
return(
    <section
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'monospace',
      textAlign: 'center',
    }}
  >
    <div className="image mt-2 is-2by">
      <img className="is-rounded" src="src/assets/cropped-Morin.png" alt="Picture of Cameron Morin" />
    </div>
    <h1 className="is-size-1 has-text-black">Hi! I am Cameron Morin.</h1>
    <h2 className="is-size-2 has-text-black">I am a passionte web developer with experience in HTML, CSS, and Javascript. I have experience using SQL, and Mongodb as backend frameworks. Lets connect!</h2>
  </section>
)
}