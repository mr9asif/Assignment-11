import { FaSearch } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import Blogs from '../Blogs/Blogs';
import UseAxiosSecure from '../UseAxios/UseAxiosSecure';
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const AllBlogs = () => {
    const [selectedCatagory, setSelectedCatagory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchInput, setSearchInput] = useState('');

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
    if (isPending) {
        return (
            <div className="max-w-7xl mx-auto my-3 ">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div>
                    <h1 className="text-center">
                        <Skeleton width={400} height={40} />
                    </h1>
                    <h1 className="text-center">
                        <Skeleton width={800} height={100} />
                    </h1>
                    <div className="grid grid-cols-3  gap-3">
                     <h1 >  <Skeleton width={400} height={500} count={1} /></h1>
                     <h1 >  <Skeleton width={400} height={500} count={1} /></h1>
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
        );
    }
    if (isError && error) {
        console.log(error);
    }

    const handleCatagoryChange = category => {
        setSelectedCatagory(category);
        setSearchInput('');
        setSearchQuery('')
    }

    const filterCatagory = selectedCatagory ? data.filter(blog => blog.catagory === selectedCatagory) : data;

    const filteredBlogs = searchQuery ? filterCatagory.filter(blog => blog.title.toLowerCase().includes(searchQuery.toLowerCase())) : filterCatagory;

    const handleSearch = e => {
        e.preventDefault();
        const searchValue = e.target.search.value.trim();
        setSearchQuery(searchInput);
        setSearchQuery(searchValue);
        setSearchInput('')

    }
     if(setSearchQuery.length === 0){
         return <h1 className="text-4xl font-bold text-center">Not Found</h1>
     }

    return (
        <div className="">
            <h1 className="text-3xl font-bold my-4 text-orange-400 text-center">All Blogs</h1>

            <div className='my-4 px-7  flex justify-evenly items-center bg-orange-200  border rounded-xl py-4'>
                <div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="flex items-center border px-5 text-xl py-2 bg-gray-400  hover:bg-orange-500 hover:text-white cursor-pointer rounded-xl gap-2 "><button>{selectedCatagory ? selectedCatagory : 'All'}</button></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="text-[16px] font-bold text-orange-400"><a onClick={() => handleCatagoryChange('')}>All</a></li>
                        <li className="text-[16px] font-bold text-orange-400"><a onClick={() => handleCatagoryChange('Technology')}>Technology</a></li>
                        <li className="text-[16px] font-bold text-orange-400"><a onClick={() => handleCatagoryChange('Food')}>Food</a></li>
                        <li className="text-[16px] font-bold text-orange-400"><a onClick={() => handleCatagoryChange('News')}>News</a></li>
                    </ul>
                </div>
                <form onSubmit={handleSearch}>
                    <div className="flex justify-center items-center gap-3 ">
                        <input placeholder="Search here.."  onChange={e => setSearchInput(e.target.value)} type="text" className='p-2 bg-gray-100 rounded-xl  text-gray-900 font-bold' name="search" id="" />
                        <div className="flex items-center border px-3 py-2  hover:bg-orange-500 hover:text-white cursor-pointer rounded-xl gap-2">
                            <button type="submit" className="font-bold">Search</button>
                            <FaSearch />
                        </div>
                    </div>
                </form>
            </div>
             <div>
             {filteredBlogs.length === 0 ? <div className="mb-36"><h1 className="text-4xl mt-24 font-bold text-center">No Blogs Found</h1></div> :
                 
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border mb-4 gap-4 max-w-7xl mx-auto">
             {filteredBlogs.map(blog => <Blogs key={blog._id} blog={blog} />)}
         </div>

             }
             
             </div>
           
        </div>
    );
};

export default AllBlogs;
