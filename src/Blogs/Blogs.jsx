import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from "react-photo-view";

const Blogs = ({ blog }) => {

    const { user } = useContext(AuthContext);
    const email = user?.email;
    const { imageUrl, title, _id, catagory, shortDiscription, lognDescription } = blog;


    const handleWishList = () => {
   
        const b = { imageUrl, title, _id, catagory, shortDiscription, lognDescription, email };

        // Fetch wishlist data
        axios.get(`http://localhost:4000/wishlist/${email}` )
            .then(res => {
                console.log(res.data);
               

                // Check if the blog already exists in the wishlist
                const existingWish = res.data.find(w => w.title === title);
                if (existingWish) {
                    toast.error('This blog is already in your wishlist');
                    return; 
                }

                // If the blog doesn't exist, add it to the wishlist
                axios.post('http://localhost:4000/addwishlist', b)
                    .then(res => {
                        console.log(res.data);
                        if (res.data && res.data.insertedId) {
                            toast.success('You added Wishlist Successfully!');
                    
                        } else {
                            toast.error('Unexpected response from server');
                        }
                    })
                    .catch(error => {
                        console.error('Error adding to wishlist:', error);
                        toast.error('Error adding to wishlist');
                    });
            })
            .catch(error => {
                console.log(error);
            });
    };
 
    return (
        <div>
       
            <div  data-aos="fade-up"
            data-aos-duration="1200" className=" shadow-lg rounded-md relative h-[510px]">
            <PhotoProvider>
            <PhotoView src={imageUrl}>
              <img className="w-full h-[300px] p-2" src={imageUrl} alt="" />
            </PhotoView>
          </PhotoProvider>

                <div className="p-5">
                    <h1 className="text-2xl font-bold text-orange-600 ">{title}</h1>
                    <h1 className="text-xl font-bold text-green-600"><span>Catagory: </span>{catagory}</h1>
                    <p className="text-[16px] font-semibold text-gray-500">{shortDiscription.slice(0, 60)}..</p>

                    <div className="flex justify-between items-center mb-3  px-6 my-2 absolute bottom-0">
                        <Link to={`/viewdetails/${_id}`}><button className="btn btn-outline mr-24 bg-green-400 hover:bg-green-600 hover:text-white text-[15px] text-gray-700">View Details</button></Link>
                        <button onClick={handleWishList} className="btn btn-outline bg-orange-400 hover:bg-orange-600 hover:text-white text-[15px] text-gray-700">Add WishList</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
