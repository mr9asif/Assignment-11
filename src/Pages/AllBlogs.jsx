import { FaSearch } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import Blogs from '../Blogs/Blogs';
import UseAxiosSecure from '../UseAxios/UseAxiosSecure';
import { useState } from "react";

const AllBlogs = () => {
    const [selectedCatagory, setSelectedCatagory]= useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const axiosSecure = UseAxiosSecure(); // UseAxiosSecure returns the axios instance directly
    const { isPending, isError, data, error } = useQuery({
        queryFn: async () => {
            try {
                const response = await axiosSecure('/allblogs');
                return response.data;
            } catch (error) {
               throw new Error("Failed to fetch blogs");
            } 
        },
        queryKey: ['blogs'],
    });

    console.log(data);
     if(isPending){
         return <h1>Loading Data..........</h1>
     }
    if (isError && error) {
        console.log(error);
    }
     const handleCatagoryChange = catagory=>{
        setSelectedCatagory(catagory);
     }
     const filterCatagory = selectedCatagory ? data.filter(blog=> blog.catagory === selectedCatagory) : data;
     
     const handleSearch = e => {
        e.preventDefault();
        const searchValue = e.target.search.value.toLowerCase();
        setSearchQuery(searchValue);
    }

    const filteredBlogs = filterCatagory.filter(blog => {
        const categoryMatch = !selectedCatagory || blog.catagory === selectedCatagory;
        const searchMatch = !searchQuery || blog.title.toLowerCase().includes(searchQuery);
        return categoryMatch && searchMatch;
    });

    return (
        <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold my-4 text-orange-400 text-center">All Blogs</h1>

          <div className='my-5 max-w-6xl mx-auto mb-16 flex justify-around items-center'>
          <div className="dropdown dropdown-right">
          <div tabIndex={0} role="button" className="btn text-xl font-bold text-gray-100 bg-gray-600 hover:bg-orange-500 m-1">All</div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li className="text-[16px] font-bold text-orange-400"><a onClick={()=>handleCatagoryChange('')}>All</a></li>
              <li  className="text-[16px] font-bold text-orange-400"><a  onClick={()=>handleCatagoryChange('Technology')}>Technology</a></li>
              <li  className="text-[16px] font-bold text-orange-400"><a  onClick={()=>handleCatagoryChange('Food')}>Food</a></li>
              <li  className="text-[16px] font-bold text-orange-400"><a  onClick={()=>handleCatagoryChange('News')}>News</a></li>
          </ul>
          </div>
          <form onSubmit={handleSearch}>
          <div className="flex justify-center items-center gap-3">
          <input type="text" className='p-2 bg-gray-100 rounded-xl  text-gray-900 font-bold' name="search" id="" />
          <div className="flex items-center border px-3 py-2  hover:bg-orange-500 hover:text-white cursor-pointer rounded-xl gap-2">
            <input type="submit" value='Search' />
            <FaSearch></FaSearch>
          </div>
        </div>
          </form>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {
                filteredBlogs.map(blog=><Blogs key={blog._id} blog={blog}></Blogs> )
             }
        </div>
    </div>
    );
};

export default AllBlogs;
