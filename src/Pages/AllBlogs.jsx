

import { useQuery } from '@tanstack/react-query';
import Blogs from '../Blogs/Blogs';
import UseAxiosSecure from '../UseAxios/UseAxiosSecure';

const AllBlogs = () => {
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

    return (
        <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold my-4 text-orange-400 text-center">All Blogs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {
                data.map(blog=><Blogs key={blog._id} blog={blog}></Blogs> )
             }
        </div>
    </div>
    );
};

export default AllBlogs;