import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/HeaderComponent";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";



const Grocery = React.lazy(() => import("./components/Grocery"));





const AppLayout = () => {
    const [username, setUsername] = useState();
    useEffect(() => {
        //if i have api then i can fetch from here
        const data = {
            name: "kulamani pradhan"
        }
        setUsername(data.name)
    }, [])
    return (<UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div></UserContext.Provider>

    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,

            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resid",
                element: <RestaurantMenu />,


            },
            {
                path: "/grocery",
                element: <Suspense fallback="Loading....."><Grocery /></Suspense>


            }



        ],
        errorElement: <Error />,

    },


])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)