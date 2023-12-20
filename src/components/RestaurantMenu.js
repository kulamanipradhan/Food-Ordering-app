import React, { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resid } = useParams();
    const resInfo = useRestaurantMenu(resid);
    const [showindex, setshowIndex] = useState(null)
    if (resInfo === null) {
        return (
            <div className="m-5 text-center flex justify-center p-5">
                <div className="border border-gray-200  p-2 shadow-lg w-6/12 h-[50px]"></div>
            </div>
        );
    }

    // Destructuring with default values
    const {
        name = "Not available",
        cuisines = [],
        costForTwoMessage = "Not available",
    } = resInfo?.cards?.[2]?.card?.card?.info;

    const itemCards =
        resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
            ?.itemCards;

    //console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories =
        resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.card?.["@type"] ==
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    // console.log(categories)

    return (
        <div className="text-center">
            <div>
                <h1 className="font-extrabold fo my-6">{name}</h1>
                <p className="font-semibold f">{cuisines.join(", ")}</p>
                <p className="font-semibold ">{costForTwoMessage}</p>
            </div>

            <div className="shadow-2xl">
                {categories.map((category, index) => (
                    <RestaurantCategory
                        key={category?.card?.card.title}
                        data={category?.card?.card}
                        showItems={index == showindex ? true : false}
                        setshowIndex={() => { setshowIndex(index) }}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
