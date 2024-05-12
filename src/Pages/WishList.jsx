import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Wishlisht from "../Blogs/Wishlisht";




const WishList = () => {
    // const {axiosSecure}= UseAxiosSecure()
    const {user}= useContext(AuthContext)
       const email = user.email;
       const [wishlist, setWishlist]= useState([])

    //       const {data, isPending, error , isError} = useQuery({
    //         queryKey:['wish'],
    //         queryFn: async () => {
    //             // Fetch wishlist data and return it
    //             const response = await axiosSecure(`/wishlistblogs/${email}`);
    //             return response.data;
    //         }
    //       })
    //       console.log("Data:", data);
    //       console.log("IsPending:", isPending);
    //       console.log("Error:", error);
    //       console.log("IsError:", isError);


    useEffect(()=>{
        axios.get(`http://localhost:4000/wishlistblogs/${email}`,  {withCredentials:true})
        .then(res=>{
            console.log(res.data)
            setWishlist(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
    return (
        <div>
        <h1 className="text-3xl font-bold my-4 text-orange-400 text-center">Your Wishlist</h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
             {
                wishlist.map(wish=><Wishlisht key={wish._id} wish={wish} wishlist={wishlist} setWishlist={setWishlist}></Wishlisht>)
             }
            </div>
        </div>
    );
};

export default WishList;