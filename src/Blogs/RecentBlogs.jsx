import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxios/UseAxiosSecure";
import RBlog from "./RBlog";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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
        return (
            <div className="max-w-7xl mx-auto my-3 ">
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
        );
     }
    if (isError && error) {
        console.log(error);
    }

    return (
        <div className="max-w-7xl mx-auto">
            <h1  data-aos="fade-up"
            data-aos-duration="1200" className="text-3xl font-bold my-4 text-orange-400 text-center">Recent Blogs</h1>

            <div id="blogSection" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {
                    data.slice(0, 6).map(blog=><RBlog key={blog._id} blog={blog}></RBlog> )
                 }
            </div>
        </div>
    );
};

export default RecentBlogs;
