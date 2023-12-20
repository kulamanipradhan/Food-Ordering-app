import React, { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resid } = useParams();
    const resInfo = useRestaurantMenu(resid);
    if (resInfo === null) {
        return <Shimmer />;
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

    return (
        <div className="Menu">
            <h1>{name}</h1>
            <p>
                Cuisines: {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <ul>
                {itemCards &&
                    itemCards.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name || "Item Name Not Available"} - Rs
                            {(item.card.info.price || 0) / 100}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
