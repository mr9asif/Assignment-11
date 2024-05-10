import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { useParams } from "react-router-dom";


const UpdateBlogs = () => {
    const {id}= useParams()
        const [data, setData]=useState({})
        const {imageUrl, title,_id, catagory,shortDiscription , lognDescription, userEmail} = data;
        console.log(data)
    const {user} = useContext(AuthContext)
    
  window.scrollTo(0, 0)


  useEffect(() => {
    fetch(`http://localhost:4000/viewdetails/${id}`)
        .then(res => res.json())
        .then(data => {
        
            setData(data)
        })
}, [id]);


    const handleAdd = e =>{
        e.preventDefault();
        const form = e.target;
        const imageUrl = form.imageUrl.value;
        const title = form.title.value;
        const catagory = form.catagory.value;
        const shortDiscription = form.shortDiscription.value;
        const lognDescription = form.lognDescription.value;
     
        const username = form.username.value;
        const userEmail = form.userEmail.value;

        const Blogs = {imageUrl, title, catagory, shortDiscription, lognDescription, username, userEmail, 
        }
              console.log(Blogs)

              axios.post('http://localhost:4000/addblogs', Blogs)
              .then(response => {
                console.log(response.data);
                if (response.data.insertedId) {

                toast.success('you added successfully')
                }
              })
              .catch(error => {
                console.error('Error:', error);
              });
            
              


    }

    return (
        <div>
        <div className="max-w-8xl mx-auto  py-6">
        <h1 className="text-4xl text-orange-600 text-center font-bold py-5 ">Update YOUR Blogs</h1>
       <div className="p-8 max-w-4xl mx-auto bg-gray-400 rounded-xl my-4 ">
       <form  onSubmit={handleAdd} className="grid grid-cols-2 gap-4">
          
           <div className="form-group">
               <label  className="text-xl font-semibold"  htmlFor="touristSpotName">Blog Title</label>
               <input
                   type="text"
                   id="title"
                   name="title"
                   defaultValue={title}
                   className="input input-bordered w-full"
               />
           </div>
           <div className="form-group">
               <label  className="text-xl font-semibold"   htmlFor="touristSpotName">Blog Catagory</label>
               <input
                   type="text"
                   id="catagory"
                   name="catagory"
                   defaultValue={catagory}
                   className="input input-bordered w-full"
               />
           </div>

           <div className="form-group col-span-2">
           <label className="text-xl font-semibold" htmlFor="imageUrl">Image URL</label>
           <input
               type="text"
               id="imageUrl"
               name="imageUrl"
               defaultValue={imageUrl}
             
               className="input input-bordered w-full"
           />
       </div>
        
          
           <div className="form-group col-span-2">
               <label  className="text-xl font-semibold"  htmlFor="description">Short Description</label>
               <textarea
                   id="shortDiscription"
                   name="shortDiscription"
                   defaultValue={shortDiscription}
                   className="textarea textarea-bordered w-full"
               />
           </div>
          
          
           <div className="form-group col-span-2 ">
               <label  className="text-xl font-semibold"  htmlFor="description">Long Description</label>
               <textarea
                   id="longDescription"
                   name="lognDescription"
                   defaultValue={lognDescription}
                   className="textarea textarea-bordered w-full"
               />
           </div>
          
         
          
           <div className="form-group">
               <label  className="text-xl font-semibold"  htmlFor="totalVisitorsPerYear">User Name</label>
               <input
                   type="text"
                   id="totalVisitorsPerYear"
                   name="username"
                 
                   value={user?.displayName}
                   disabled
                   className="input input-bordered w-full"
               />
           </div>
           <div className="form-group">
               <label  className="text-xl font-semibold"  htmlFor="totalVisitorsPerYear">User Email</label>
               <input
                   type="text"
                   id="totalVisitorsPerYear"
                   name="userEmail"
                   value={user.email}
                   disabled
                   className="input input-bordered w-full"
               />
           </div>
           <div className="form-group col-span-2">
               <button type="submit" className="btn btn-primary w-full">ADD</button>
           </div>
       </form>
   </div>
       </div>
        </div>
    );
};

export default UpdateBlogs;