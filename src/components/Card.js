import image1 from '../Images/card-image1.webp';
import star from '../Images/star.png';

function Card(){
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={image1} className="card-image"/>
            </div>
            <div className="info-container">
                <p className="review-container">
                    <img src={star} className="star"/>
                    <span>4.93 (1,262) &bull; Galway</span>
                </p>
                <p className="card-description">
                    Galway's legendary walking tour!
                </p>
                <p> 
                    From &euro; 15 / person
                </p>

            </div>

        </div>
    );
}
export default Card;