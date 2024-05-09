import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import AllBlogs from "../Pages/AllBlogs";
import AddBlog from "../Pages/AddBlog";
import FeaturedBlogs from "../Pages/FeaturedBlogs";
import WishList from "../Pages/WishList";
import About from "../Pages/About";

const router=createBrowserRouter([
     {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:([
            {
             index:true,
             element:<Home></Home>
            },
            {
                path:'/allblogs',
                element:<AllBlogs></AllBlogs>
            },
            {
                path:'/addblogs',
                element:<AddBlog></AddBlog>
            },
            {
                path:'/featureblogs',
                element:<FeaturedBlogs></FeaturedBlogs>
            },
            {
                path:'/wishlistblogs',
                element:<WishList></WishList>
            },
            {
                path:'about',
                element:<About></About>
            }
        ])
     }
])


export default router;