
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import 'react-photo-view/dist/react-photo-view.css';

const Wishlisht = ({wish, wishlist, setWishlist}) => {
    const { imageUrl, title, _id, catagory, shortDiscription, lognDescription } = wish;
    console.log(wish)


    const handleRemove = id => {
        console.log('delete', id);
    
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:4000/wish/${id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  const remaining = wishlist.filter(item => item._id !== id);
                  setWishlist(remaining);
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your Tourist Spot has been deleted.",
                    icon: "success"
                  });
                }
              })
          }
        });
      }
    return (
        <div>
        <div className="bg-gray-200 shadow-lg rounded-md relative h-[500px]">
        <PhotoProvider>
        <PhotoView src={imageUrl}>
          <img className="w-full h-[300px] p-2" src={imageUrl} alt="" />
        </PhotoView>
      </PhotoProvider>
        <div className="p-5">
            <h1 className="text-2xl font-bold text-orange-600 ">{title}</h1>
            <h1 className="text-xl font-bold text-green-600"><span>Catagory: </span>{catagory}</h1>
            <p className="text-[16px] font-semibold text-gray-500">{shortDiscription.slice(0, 90)}..</p>

            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center mb-3 px-6 my-2">
                    <Link to={`/viewdetails/${_id}`}>
                        <button className="btn btn-outline bg-green-400 hover:bg-green-600 hover:text-white text-[15px] text-gray-700">View Details</button>
                    </Link>
                    <button onClick={()=>handleRemove(_id)} className="btn btn-outline bg-orange-400 hover:bg-orange-600 hover:text-white text-[15px] text-gray-700">Remove</button>
                </div>
        </div>
    </div>
        </div>
    );
};

export default Wishlisht;