import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
            },
        ]
    },
    {
        path: "/auth",
        element: <h2>Authentication Layout</h2>
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