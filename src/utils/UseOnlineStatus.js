import React, { useEffect, useState } from 'react';

const UseOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        const handleOnline = () => {
            setOnlineStatus(true);
        };

        const handleOffline = () => {
            setOnlineStatus(false);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };

    }, []);

    return onlineStatus;
};

export default UseOnlineStatus;
