function Card({image, title, description, link}) {

    return(
        <div className="card column is-one-quarter mt-5" style={{
        borderRadius: '.51rem',
        }}>
        <div className="card-image"><figure className="image"><img src={image}></img></figure></div>
        <div className='card-content'><h1 className="title is-4">{title}</h1></div>
        <div className="media-content"><h2 className="subtitle is-5">{description}</h2></div>
        <div><a href={link}><button className="button is-black is-link">Visit this project</button></a></div>
        </div>     
    )
    
    }
    export default Card;