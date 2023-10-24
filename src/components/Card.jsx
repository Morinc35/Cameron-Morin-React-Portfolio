function Card(props) {
    const {image, title, description} = props;
    return(
        <div className="card">
        <div className="card-image"><figure className="image is-128x128"><img src={image}></img></figure></div>
        <div className='card-content'><h1>{title}</h1></div>
        <div className="media-content"><h2>{description}</h2></div>
        </div>
        
        
    )
    
    }
    export default Card;