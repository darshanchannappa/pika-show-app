import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";
import TvSeries from "./pages/tv-series";
import Error from "./pages/error";
import Bookmark from "./pages/bookmark";

export const router = createBrowserRouter([
    //array of our routes
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>,
        //changes in second Error (as page not Error function)
    },
    {
        path: "/movie",
        element: <Movie/>,
        errorElement: <Error/>,
    },
    {
        path: "/tv-series",
        element: <TvSeries/>,
        errorElement: <Error/>,
    },
    {
        path: "/bookmark",
        element: <Bookmark/>,
        errorElement: <Error/>,
    }
])