import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { CommonImageUrl } from "./config";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {

    const {resId} = useParams();
    const [restaurantDetail, setRestaurantDetail] = useState({});
    const {name,id,cloudinaryImageId,cuisines} = restaurantDetail;
    const [restoMenuList, setRestoMenuList] = useState([]);
    
    useEffect(() => {
        getRestoDetails();
    },[]);

    async function getRestoDetails (){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7354064&lng=83.27378569999999&restaurantId=" + resId);
        const jsonData = await data.json();
        // console.log(jsonData?.data?.cards[2]?.card?.card?.info);
        // console.log(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        setRestaurantDetail(jsonData?.data?.cards[2]?.card?.card?.info);
        setRestoMenuList(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    }

    // console.log(restoMenuList)
    
    return( (restoMenuList.length===0) ? <Shimmer/> : 
        <>
       <div className="resto-menu-items">
       <div className="resto-details">
       <img src={CommonImageUrl + cloudinaryImageId} alt="image" className="rest-image"/>
        <h1>{name}</h1>
        <p>{id}</p>
        <h2>{cuisines}</h2>
        </div>
        <div>
        <h1>Menu</h1>
            {restoMenuList.map((eachItem) => {
                return(
                    <div className="menu-list">
                    <ul>
                    <li key={eachItem.card.info.id}>{eachItem.card.info.name}</li>
                    </ul>
                    </div>
                )
            })}
        </div>
       </div>
        </>
    )
}

export default RestaurantDetails