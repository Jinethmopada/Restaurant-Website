import React from "react";
import Card from "./RestaurantCard";
import { cardList } from "./config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{

    const [searchTxt,setSearchTxt] = useState('');
    const [filteredRestList, setFilteredRestList] = useState([]);
    const [allRestoList, setAllRestoList] = useState([]);
    const [noResultFound, setNoResultFound] = useState(false);

    useEffect(()=>{
        getRestaurantData();
    },[]);


    async function getRestaurantData(){
        const fetchData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7354064&lng=83.27378569999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await fetchData.json();
        // console.log(json.data);
        setAllRestoList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    
    if(!allRestoList) return null; 

    return  (allRestoList.length ===0 )? <Shimmer/> : (
        <>
        
        {/* Search Element */}
        <div className="search-container">
            <input type="search" className="search-element" placeholder="Search" value={searchTxt} onChange={(e) => {
                setSearchTxt(e.target.value);
            }}/> 
            <button className="search-btn"
            onClick={()=> {
                const data = allRestoList.filter((item)=> item?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase()));
                setFilteredRestList(data);
                setNoResultFound(data.length===0);
                }
            }
            >Search</button>
        </div>
        
        <div className="cards-container"> 
        {noResultFound && <h1>No Results Found !!!</h1>}
        {filteredRestList.map((eachItem) => {
            return <Card {...eachItem.info} key={eachItem.info.id}/> 
        })}
        </div>
        </>
   )
}

export default Body