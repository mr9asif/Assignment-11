import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import swal from 'react-sweetalert2';

const AddBlog = () => {
    const {user} = useContext(AuthContext)

    const handleAdd = e =>{
        e.preventDefault();
        const form = e.target;
        const imageUrl = form.imageUrl.value;
        const touristSpotName = form.touristSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalvisitor = form.totalvisitor.value;
        const username = form.username.value;
        const userEmail = form.userEmail.value;

        const TouristSpot = {imageUrl, touristSpotName, countryName, location, description, averageCost, 
                          seasonality, travelTime, totalvisitor, username, userEmail, 
        }
              console.log(TouristSpot)

          fetch('https://as-10-server.vercel.app/addTourists',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(TouristSpot)

          } )
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.insertedId){
                swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You Added Tourist Spots Succesfully",
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
          })


    }

    return (
        <div>
        <div className="max-w-8xl mx-auto  py-6">
        <h1 className="text-4xl text-orange-600 text-center font-bold py-5 ">ADD YOUR Blogs</h1>
       <div className="p-8 max-w-4xl mx-auto bg-gray-400 rounded-xl my-4 ">
       <form  onSubmit={handleAdd} className="grid grid-cols-2 gap-4">
          
           <div className="form-group">
               <label  className="text-xl font-semibold"  htmlFor="touristSpotName">Blog Title</label>
               <input
                   type="text"
                   id="title"
                   name="title"
                   
                   className="input input-bordered w-full"
               />
           </div>
           <div className="form-group">
               <label  className="text-xl font-semibold"  htmlFor="touristSpotName">Blog Catagory</label>
               <input
                   type="text"
                   id="catagory"
                   name="catagory"
                   
                   className="input input-bordered w-full"
               />
           </div>

           <div className="form-group col-span-2">
           <label className="text-xl font-semibold" htmlFor="imageUrl">Image URL</label>
           <input
               type="text"
               id="imageUrl"
               name="imageUrl"
             
             
               className="input input-bordered w-full"
           />
       </div>
        
          
           <div className="form-group col-span-2">
               <label  className="text-xl font-semibold"  htmlFor="description">Short Description</label>
               <textarea
                   id="shortDiscription"
                   name="shortDiscription"
                
                   className="textarea textarea-bordered w-full"
               />
           </div>
          
          
           <div className="form-group col-span-2 ">
               <label  className="text-xl font-semibold"  htmlFor="description">Long Description</label>
               <textarea
                   id="longDescription"
                   name="lognDescription"
                
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

export default AddBlog;