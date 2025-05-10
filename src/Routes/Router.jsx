import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";

const router= createBrowserRouter([
{
    path:"/",
    Component:Header
},
{
    path:"/auth",
    element: <h2>Authentication Layout</h2>
},
{
    path:"/news",
    element: <h2>News Layout</h2>
},
{
    path:"/*",
    element: <h2>Error 404</h2>
},
]);

export default router