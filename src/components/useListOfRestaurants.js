
import { useEffect } from 'react';
import { useState } from 'react';

const useListOfRestaurants = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
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
  const handleFilter = () => {
    // Update the listOfRestaurants state based on the filter condition
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setFilteredRestaurant(filteredList);
  };

  return { listOfRestaurants, FilteredRestaurant, handleFilter }
}

export default useListOfRestaurants