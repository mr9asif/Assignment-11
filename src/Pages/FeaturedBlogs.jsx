import { useQuery } from "@tanstack/react-query";

import UseAxiosSecure from "../UseAxios/UseAxiosSecure";
import Fblog from "../Blogs/Fblog";


const FeaturedBlogs = () => {
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

    const sortedData = [...data].sort((a, b) => b.lognDescription.length - a.lognDescription.length);
      
    return (
        <div>
            <h1 className="text-3xl font-bold text-orange-500 text-center my-6">Latest Blogs</h1>

                <div className="my-6">
                {
                    sortedData.slice(0,10).map((fblog, index)=> <Fblog key={fblog._id} fblog={fblog} index={index + 1}></Fblog>)
                }
                </div>
        </div>
    );
};

export default FeaturedBlogs;