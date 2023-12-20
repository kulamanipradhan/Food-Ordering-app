import React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/HeaderComponent";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";



const Grocery = React.lazy(() => import("./components/Grocery"));



const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Outlet />
        <Footer />
    </div>
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