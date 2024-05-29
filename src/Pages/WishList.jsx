import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Wishlisht from "../Blogs/Wishlisht";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";





const WishList = () => {
    //  const {axiosSecure}= UseAxiosSecure()
    const {user}= useContext(AuthContext)
       const email = user.email;
       const [wishlist, setWishlist]= useState([])
       const [loading, setLoading] = useState(true);
   


    useEffect(()=>{
        
        axios.get(`https://as-11-server.vercel.app/wishlistblogs/${email}`,  {withCredentials:true})
        .then(res=>{
            console.log(res.data)
            setWishlist(res.data)
            setLoading(false);
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
    return (
        <div>
        <h1 className="text-3xl font-bold my-4 text-orange-400 text-center">Your Wishlist</h1>

           
           

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {loading ? (
                <div className="col-span-full text-center text-gray-500">
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div>
                    <h1 className="text-center">
                        <Skeleton width={400} height={40} />
                    </h1>
                    <div className="grid grid-cols-3  gap-3">
                     <h1 >  <Skeleton width={400} height={500} count={1} /></h1>
                     <h1 >  <Skeleton width={400} height={500} count={1} /></h1>
                     <h1 >  <Skeleton width={400} height={500} count={1} /></h1>
                     <h1 >  <Skeleton width={400} height={500} count={1} /></h1>
                     <h1 >  <Skeleton width={400} height={500} count={1} /></h1>
                     <h1 >  <Skeleton width={400} height={500} count={1} /></h1>
                    </div>
                </div>
            </SkeletonTheme>
                </div>
            ) : wishlist.length > 0 ? (
                wishlist.map(wish => (
                    <Wishlisht key={wish._id} wish={wish} wishlist={wishlist} setWishlist={setWishlist} />
                ))
            ) : (
                <div className="col-span-full text-center text-gray-500 text-5xl font-bold mb-72 my-10 mt-28">No wishlist items found.</div>
            )}
      
      
            </div>


         
        </div>
    );
};

export default WishList;