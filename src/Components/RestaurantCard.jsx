import { CommonImageUrl } from "./config"

const Card = ({cloudinaryImageId,name,costForTwo,cuisines,avgRating,locality}) =>{
        return(
            <div className="restaurant-card">
                <img className="rest-image" src={CommonImageUrl + cloudinaryImageId} alt="logo"/>
                <h1>{name}</h1>
                <h2>{costForTwo}</h2>
                <h3>{locality}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <p>{avgRating}</p>
            </div>
        )
    }

export default Card;    