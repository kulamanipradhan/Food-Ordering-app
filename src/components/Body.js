import React, { useEffect, useState } from "react";
// import { resdatalist } from "../utils/mockdata";
import Shimmer from "./shimmer";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";

const Body = () => {
    // Use state to manage the filtered list
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchValue, setSerachValue] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9351929&lng=77.62448069999999&carousel=true&third_party_vendor=1");

        const json = await data.json();

        setlistOfRestaurants(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };
    //condtional rendering
    // rendering based on conditions

    const handleFilter = () => {
        // Update the listOfRestaurants state based on the filter condition
        const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating >= 4.5
        );
        setFilteredRestaurant(filteredList);
    };

    return FilteredRestaurant == 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search, Order, Repeat"
                        value={searchValue}
                        onChange={(e) => setSerachValue(e.target.value)}
                    />
                    <button
                        className="search-btn"
                        onClick={() => {
                            const sfilteredList = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchValue.toLowerCase())
                            );
                            setFilteredRestaurant(sfilteredList);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="Filterbyclick">
                    <button className="filter-btn" onClick={handleFilter}>
                        Rating 4.5+
                    </button>
                </div>
            </div>
            <div className="Res-container">
                {FilteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}
                    >
                        {" "}
                        <ResCard restaurant={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
