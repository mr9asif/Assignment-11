import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxios/UseAxiosSecure";
import RBlog from "./RBlog";

const RecentBlogs = () => {
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
            <h1 className="text-3xl font-bold my-4 text-orange-400 text-center">Recent Blogs</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {
                    data.slice(0, 6).map(blog=><RBlog key={blog._id} blog={blog}></RBlog> )
                 }
            </div>
        </div>
    );
};

export default RecentBlogs;
