import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

const RBlog = ({ blog }) => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const { imageUrl, title, _id, catagory, shortDiscription, lognDescription } = blog;


    const handleWishList = () => {
   
        const b = { imageUrl, title, _id, catagory, shortDiscription, lognDescription, email };

        // Fetch wishlist data
        axios.get(`https://as-11-server.vercel.app/wishlist/${email}`)
            .then(res => {
                console.log(res.data);
               

                // Check if the blog already exists in the wishlist
                const existingWish = res.data.find(w => w.title=== title);
                if (existingWish) {
                    toast.error('This blog is already in your wishlist');
                    return; 
                }

                // If the blog doesn't exist, add it to the wishlist
                axios.post('https://as-11-server.vercel.app/addwishlist', b)
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

        <div  data-aos="fade-up"
        data-aos-duration="2000" className="border-l-orange-200-100 shadow-lg rounded-md relative h-[500px]">
        <PhotoProvider>
        <PhotoView src={imageUrl}>
          <img className="w-full h-[300px] p-2" src={imageUrl} alt="" />
        </PhotoView>
      </PhotoProvider>
            <div className="p-5">
                <h1 className="text-2xl font-bold text-orange-600">{title}</h1>
                <h1 className="text-xl font-bold text-green-600"><span>Catagory: </span>{catagory}</h1>
                <p className="text-[16px] font-semibold text-gray-500">{shortDiscription.slice(0, 90)}..</p>

                {/* Positioning the buttons at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center mb-3 px-6 my-2">
                    <Link to={`/viewdetails/${_id}`}>
                        <button className="btn btn-outline bg-green-400 hover:bg-green-600 hover:text-white text-[15px] text-gray-700">View Details</button>
                    </Link>
                    <button onClick={handleWishList} className="btn btn-outline bg-orange-400 hover:bg-orange-600 hover:text-white text-[15px] text-gray-700">Add WishList</button>
                </div>
            </div>
        </div>
    );
};

export default RBlog;
