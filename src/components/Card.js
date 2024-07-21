import star from '../Images/star.png';

function Card(prop){
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={prop.img} className="card-image"/>
            </div>
            <div className="info-container">
                <p className="review-container">
                    <img src={star} className="star"/>
                    <span>{prop.rating}</span>
                </p>
                <p className="card-description">{prop.description}</p>
                <p>{prop.price}</p>
            </div>
        </div>
    );
}
export default Card;