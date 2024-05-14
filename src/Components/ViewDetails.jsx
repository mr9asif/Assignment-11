


import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

import toast from "react-hot-toast";
import Comment from "./Comment";
import { Link, useNavigate, useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ViewDetails = () => {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const [loading, setLoading]= useState(true)
 
  const {photoURL, displayName, email}= user;
  const [comments, setComments]= useState([])

  window.scrollTo(0, 0)
    const {id}= useParams();
    const [details, setDetails]= useState({})
  
       const {imageUrl, title,_id, catagory,shortDiscription , lognDescription, userEmail} = details;
    



       
   useEffect(() => {
       fetch(`https://as-11-server.vercel.app/viewdetails/${id}` )
           .then(res => res.json())
           .then(data => {
           
               setDetails(data)
               setLoading(false)
           })
   }, [id]);


   const fetchComments = () => {
    axios('https://as-11-server.vercel.app/allcomments')
      .then(res => {
        console.log(res.data)
        setComments(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  };

   const handleComment = e => {
    e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        const id = _id;
        const com = {comment, photoURL, displayName, id}
        axios.post('https://as-11-server.vercel.app/addcomments', com)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            toast.success('Thank you for Sharing your Opinion!')
            fetchComments()
          }
        })
        .catch(error=>{
          console.log(error)
        })
        form.reset()
   
    console.log(comment);
};


   useEffect(()=>{
     axios('https://as-11-server.vercel.app/allcomments')
     .then(res=>{
      console.log(res.data)
      setComments(res.data)
     })
     .catch(error=>{
      console.log(error)
     })

    //  fetchComments()
   },[])
      
   if(loading){
    return (
      <div className="max-w-7xl mx-auto">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div>
          <h1 className="text-center">
              <Skeleton width={400} height={40} />
          </h1>
          <div className="">
          
           <h1 >  <Skeleton width={700} height={400} count={1} /></h1>
           <h1 >  <Skeleton width={700} height={200} count={1} /></h1>
           <h1 >  <Skeleton width={700} height={200} count={1} /></h1>
           
          
          </div>
      </div>
  </SkeletonTheme>
      </div>
    )
   }
   
  //  if(!user){
  //   return navigate('/login')
  // }
      

  return (
    <div className="max-w-6xl mx-auto my-6   ">
      <div className="bg-gray-100 shadow-lg rounded-md  ">
        <img className="w-full h-[460px] p-2" src={imageUrl} alt="" />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-orange-600 my-6 ">{title}</h1>
          <h1 className="text-xl mb-4 font-bold text-green-600"><span>Category: </span>{catagory}</h1>
          <p className="text-xl  font-semibold text-gray-700">{shortDiscription}</p>
          <p className="text-[18px] font-semibold my-4 text-gray-500">{lognDescription}</p>
        
         {
          userEmail !== email ? (
            <div className="my-8 mt-24 relative h-[170px]">
            <h1 className="text-xl font-bold text-orange-500 mb-2">Share Yoor Opinion below..</h1>
            <form onSubmit={handleComment}>
            <textarea
              id="shortDiscription"
              name="comment"
              className="textarea textarea-bordered w-full border-orange-400"
            />
            <button type="submit" className="btn btn-outline hover:bg-orange-500 hover:text-white absolute right-2 bottom-1 text-xl font-semibold">
              Comment
            </button>
          </form>
         </div>
          ) : (
                 <div className="w-[100%] mx-auto">
                <Link to={`/updateblogs/${_id}`}> <button className="w-full btn btn-outline text-gray-400 hover:bg-orange-600 hover:text-white">Update</button></Link>
                 </div>
          )
         }
           </div>

        <div className="mx-5 my-3">
        <h1 className="text-xl font-bold text-gray-600 pl-12">All Comments </h1>
             <div className="max-w-4xl mx-auto gap-4 my-4 pb-5">
             {comments.map(com =>
              com.id === _id && <Comment key={com._id} com={com} />
            )}
             </div>
         <div>
            
         </div>
        </div>
        </div>
      
    </div>
  );
};

export default ViewDetails;
