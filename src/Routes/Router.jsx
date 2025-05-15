import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayouts,
        children:[
            {
                path:"",
                element: <Home></Home>,
            },
            {
                path:"/category/:id",
                element:<CategoryNews></CategoryNews> ,
                loader: () => fetch("/news.json")
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>
            },
            {
                path:"/auth/register",
                element:<Register></Register>
            },
        ]

        
    },
    {
        path: "/news",
        element: <h2>News Layout</h2>
    },
    {
        path: "/*",
        element: <h2>Error 404</h2>
    },
]);

export default router