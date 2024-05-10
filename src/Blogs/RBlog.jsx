import { Link } from "react-router-dom";


const RBlog = ({blog}) => {
    const {imageUrl, title,_id, catagory,shortDiscription , lognDescription  } = blog;

    return (
        <div className="bg-gray-200 shadow-lg rounded-md relative h-[480px]">
            <img className="w-full p-2" src={imageUrl} alt="" />
           <div className="p-5">
           <h1 className="text-2xl font-bold text-orange-600 ">{title}</h1>
           <h1 className="text-xl font-bold text-green-600"><span>Catagory: </span>{catagory}</h1>
           <p className="text-[16px] font-semibold text-gray-500">{shortDiscription}</p>

           <div className="flex justify-between items-center mb-3  px-6 my-2 absolute bottom-0">
            <Link to={`/viewdetails/${_id}`}><button className="btn btn-outline mr-24 bg-orange-400 hover:bg-orange-600 hover:text-white text-[15px] text-gray-700">View Details</button></Link>
             <button  className="btn btn-outline bg-orange-400 hover:bg-orange-600 hover:text-white text-[15px] text-gray-700">Add WishList</button>
           </div>
           </div>
        </div>
    );
};

export default RBlog;