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
    <div className="image mt-1 is-2by">
      <img className="is-rounded" src="src/assets/cropped-Morin.png" alt="Picture of Cameron Morin" />
    </div>
    <h1 className="is-size-1">Hi! I am Cameron Morin.</h1>
  </section>
)
}