import React, { useContext, useEffect, useState } from "react";
// import { resdatalist } from "../utils/mockdata";
import Shimmer from "./shimmer";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";
// import useListOfRestaurants from "./useListOfRestaurants";
import UseOnlineStatus from "../utils/UseOnlineStatus";
import UserContext from "../utils/UserContext";

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
        // const restaurantsdata =
        //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        //         ?.restaurants;

        setlistOfRestaurants(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
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
        return <h1>You are Offline, Looks like your internet conncetion broke</h1>;
    }
    // console.log(FilteredRestaurant.length)
    if (FilteredRestaurant.length === 0) {
        const shimmerCards = Array.from({ length: 20 }, (_, index) => (
            <div
                key={index}
                className="shimmer-card p-4 w-64 h-80 bg-white rounded-md shadow-md text-center m-4"
            >
                <div className="shimmer-image w-full h-2/3 bg-gray-200 animate-shimmer"></div>
                <div className="shimmer-details mt-4 space-y-2">
                    <div className="shimmer-line w-3/4 h-4 bg-gray-200 animate-shimmer"></div>
                    <div className="shimmer-line w-1/2 h-4 bg-gray-200 animate-shimmer"></div>
                    <div className="shimmer-line w-3/4 h-4 bg-gray-200 animate-shimmer"></div>
                    <div className="shimmer-line w-1/2 h-4 bg-gray-200 animate-shimmer"></div>
                </div>
            </div>
        ));

        return (
            <div className="shimmer-container flex flex-wrap gap-4">
                {shimmerCards}
            </div>
        );
    }
    const { loggedInUser, setUsername } = useContext(UserContext);

    return (
        <div className="body w-full">
            <div className="filter flex items-center">
                <div className="search p-2 m-4  ">
                    <input
                        type="text"
                        className="px-20 py-2 m-4  border border-solid border-black rounded-md"
                        placeholder="Search, Order, Repeat"
                        value={searchValue}
                        onChange={(e) => setSerachValue(e.target.value)}
                    />
                    <button
                        className="border  px-6 py-2 m-4 rounded-2xl "
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
                    <button
                        className="border p-2 m-4 rounded-2xl "
                        onClick={handleFilter}
                    >
                        Rating 4.5+
                    </button>
                </div>
                <div>
                    <label>UserName</label>
                    <input
                        type="text"
                        value={loggedInUser}
                        className="px-20 py-2 m-4  border border-solid border-black rounded-md"
                        onChange={(e) => setUsername(e.target.value)}

                    ></input>
                </div>
            </div>
            <div className="Res-container flex flex-wrap  ">
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
