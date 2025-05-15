import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Firebase/Provider/PrivateRoute";
import Loading from "../Pages/Loading";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayouts,
        children: [
            {
                path: "",
                element: <Home></Home>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json"),
                hydrateFallbackElement: <Loading></Loading>,
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
        ]


    },
    {
        path: "/news-details/:id",
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,

    },
    {
        path: "/*",
        element: <h2>Error 404</h2>
    },
]);

export default router