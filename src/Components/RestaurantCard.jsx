import { CommonImageUrl } from "./config"

const Card = ({cloudinaryImageId,name,costForTwo,cuisines,avgRating,locality}) =>{
        return(
            <div className="restaurant-card">
                <img className="rest-image" src={CommonImageUrl + cloudinaryImageId} alt="logo"/>
                <h1 className="resto-name">{name}</h1>
                <h2 className="resto-name">{costForTwo}</h2>
                <h3 className="resto-name">{locality}</h3>
                <h4 className="resto-name">{cuisines.join(', ')}</h4>
                <p className="resto-name">{avgRating}</p>
            </div>
        )
    }

export default Card;    