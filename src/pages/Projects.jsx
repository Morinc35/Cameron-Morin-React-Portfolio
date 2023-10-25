import Card from "../components/Card";

export default function Projects() {
return(
    <main className="columns is-multiline  px-5"
    style={{gap:'15px'}}>
    <Card 
    image='/HomePage.PNG'
    title='Team Three Movies'
    link='https://kkurzawa.github.io/Movie-Project/'
    description='A basic front-end only application for searching for your favorite movies'
    />
    <Card 
    image='/animePage.jpeg'
    title='Anime Fusion'
    link='https://github.com/Seanye333/Anime-Fusion'
    description='A full stack application allowing users to enjoy their favorite anime and view new ones.' />
    <Card 
    image='/Portfolio1.PNG'
    title='Team Three Movies'
    link='https://github.com/Morinc35/Second-Challenge-Repo'
    description='My first HTML and CSS project'
    />
    <Card 
    image='/TEXTAPP.PNG'
    title='JATE Text Editor'
    link='https://github.com/Morinc35/PWA-Text-Editor'
    description='A PWA text editor app'
    />
    <Card 
    image='/ReadmeGenerator.PNG'
    title='Read-Me Generator'
    link='https://github.com/Morinc35/ReadMe-Generator'
    description='A simple and easy ReadMe Generator'
    />
    <Card 
    image='/WorkDay.PNG'
    title='Todo List'
    link='https://github.com/Morinc35/Fifth-Challenge-Repo'
    description='Save items to your To-DO list!'
    />
    </main>
)}