import React, { useEffect, useState } from "react";
// import { resdatalist } from "../utils/mockdata";
import Shimmer from "./shimmer";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";
// import useListOfRestaurants from "./useListOfRestaurants";
import UseOnlineStatus from "../utils/UseOnlineStatus";

const Body = () => {
    // Use state to manage the filtered list
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);

    const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
    // const { listOfRestaurants, FilteredRestaurant, handleFilter } = useListOfRestaurants();
    const [searchValue, setSerachValue] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9351929&lng=77.62448069999999&carousel=true&third_party_vendor=1"
        );

        const json = await data.json();
        const restaurantsdata =
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

        setlistOfRestaurants(restaurantsdata);
        setFilteredRestaurant(restaurantsdata);
    };
    // condtional rendering
    // rendering based on conditions

    const handleFilter = () => {
        // Update the listOfRestaurants state based on the filter condition
        const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating >= 4.5
        );
        setFilteredRestaurant(filteredList);
    };
    const onlineStatus = UseOnlineStatus();
    if (onlineStatus == false) {
        return <h1>You are Offline, Looks like your internet conncetion broke</h1>
    }

    return FilteredRestaurant == 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-5 p-5  ">
                    <input
                        type="text"
                        className="search-box border border-solid border-black"
                        placeholder="Search, Order, Repeat"
                        value={searchValue}
                        onChange={(e) => setSerachValue(e.target.value)}
                    />
                    <button
                        className="px-4 bg-green-200"
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
                    <button className="border" onClick={handleFilter}>
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
