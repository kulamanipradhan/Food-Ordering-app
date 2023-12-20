import React from "react";

const MenuItemList = ({ items }) => {
    const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="border-b-2 border-gray-200 text-left p-2 flex justify-between ">
                    <div className="w-[80%]">

                        <div className="m-2 ">
                            <span className="font-bold text-black">{item.card.info.name}</span>

                            <p className="text-black"> {" ₹ "}{item.card.info.price / 100}</p>
                        </div>
                        <div>
                            <p className="text-s">{item.card.info.description}</p>
                        </div>
                    </div>
                    <div className="float-right w-[20%] relative">
                        <img src={IMG_URL + item.card.info.imageId} className="m-2 w-full p-2" alt="item"></img>
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border m-2 shadow-lg bg-white px-6 font-bold py-1 text-green-500">ADD</button>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default MenuItemList;
