import React from 'react'
import { useEffect, useState } from 'react';
import { MENU_API } from './constant';

const useRestaurantMenu = (resid) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const url = MENU_API + resid;
        //console.log("Request URL: ", url);

        try {
            const data = await fetch(url);
            const json = await data.json();
            //console.log(json);
            setResInfo(json.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    return resInfo;
}

export default useRestaurantMenu