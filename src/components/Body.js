import React, { useEffect, useState } from "react";
// import { resdatalist } from "../utils/mockdata";
import Shimmer from "./shimmer";
import ResCard from "./ResCard";

const Body = () => {
    // Use state to manage the filtered list
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9351929&lng=77.62448069999999&carousel=true&third_party_vendor=1"
        );
        const json = await data.json();
        setlistOfRestaurants(
            json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };
    //condtional rendering 
    // rendering based on conditions


    const handleFilter = () => {
        // Update the listOfRestaurants state based on the filter condition
        const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating >= 4.0
        );
        setlistOfRestaurants(filteredList);
    };

    return listOfRestaurants.length == 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search, Order, Repeat" />
                    <button className="search-btn">Search</button>
                </div>
                <button className="filter-btn" onClick={handleFilter}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="Res-container">
                {listOfRestaurants.map((restaurant) => (
                    <ResCard key={restaurant.info.id} restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
