import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import AllBlogs from "../Pages/AllBlogs";
import AddBlog from "../Pages/AddBlog";
import FeaturedBlogs from "../Pages/FeaturedBlogs";
import WishList from "../Pages/WishList";
import About from "../Pages/About";
import Register from "../Components/Register";
import Login from "../Components/Login";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ViewDetails from "../Components/ViewDetails";
import UpdateBlogs from "../Components/UpdateBlogs";
import Redirect from "../PrivetRoute/Redirect";

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
                element:<PrivetRoute>
                <AddBlog></AddBlog>
                </PrivetRoute>
            },
            {
                path:'/updateblogs/:id',
                element:<PrivetRoute>
                <UpdateBlogs></UpdateBlogs>
                </PrivetRoute>
            },
            {
                path:'/featureblogs',
                element:<FeaturedBlogs></FeaturedBlogs>
            },
            {
                path:'/wishlistblogs',
                element:<PrivetRoute>
                <WishList></WishList>
                </PrivetRoute>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/viewdetails/:id',
                element:<Redirect>
                <ViewDetails></ViewDetails>,
                </Redirect>
              
                
            },

        ])
     }
])


export default router;