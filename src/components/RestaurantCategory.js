import React, { useState } from "react";
import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({ data, showItems, setshowIndex }) => {

    const handleClick = () => {
        setshowIndex()


    }

    // console.log(data);
    return (
        <div className="w-6/12 bg-gray-50 shadow-lg my-5 mx-auto p-4  flex-col">
            <div className="flex justify-between" onClick={handleClick}>
                <span className="font-bold text-lg">
                    {data.title}({data.itemCards.length})
                </span>
                <span>🔽</span>
            </div>

            <div>
                {showItems && <MenuItemList items={data.itemCards} />}
            </div>

        </div>
    );
};

export default RestaurantCategory;
