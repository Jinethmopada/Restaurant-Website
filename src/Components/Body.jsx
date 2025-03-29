import React from "react";
import cardList from "./CardsData";

const Body = ()=>{

    const Card = ({cloudinaryImageId,name,costForTwo,cuisines,avgRating}) =>{
        return(
            <div className="restaurant-card">
                <img className="rest-image" src={"https://media-assets.swiggy.com/" + cloudinaryImageId} alt="logo"/>
                <h1>{name}</h1>
                <h2>{costForTwo}</h2>
                <h3>{cuisines.join(', ')}</h3>
                <p>{avgRating}</p>
            </div>
        )
    }

    return (
        <div className="cards-container">
        {cardList.map((eachItem) => {
            return <Card {...eachItem.info} key={eachItem.info.id}/>
        })}
        </div>
   )
}

export default Body