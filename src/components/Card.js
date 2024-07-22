import star from '../Images/star.png';

function Card(props){
    return(
        <div className="card-container">
            <a href={props.link} className="card-link">
                <div className="image-container">
                    <img src={props.img} className="card-image"/>
                </div>
                <div className="info-container">
                    <p className="review-container">
                        <img src={star} className="star"/>
                        <span>{props.rating}</span>
                    </p>
                    <p className="card-description">{props.description}</p>
                    <p>{props.price}</p>
                </div>
            </a>
        </div>
    );
}
export default Card;