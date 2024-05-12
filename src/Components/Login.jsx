import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const [show, setShow] = useState(false)

  const [error, setError] = useState('')
   const {login, signout, googleSignIn,GithibSignIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location)
   const from = location?.state || '/';
 
 

 const {register,handleSubmit, formState: { errors },} = useForm()


// const handleGoogleSignIN = () =>{
//  googleSignIn()
//  .then(result=>{
//    if(result.user){
//      console.log(result.user)
//      navigate(from)
//    }
//  })
// }

const handleSocialLogin = socialLogin =>{
    socialLogin()
    .then(result=>{
      if(result.user){
        console.log(result.user)
        navigate(from)
      }
    })
   }



 const onSubmit=  data => {
   console.log(data)
   const {email, password, } = data;
   login(email, password,)
   .then(result=>{
     if(result.user){
       toast.success('You Login Successfully!')
       console.log(result.user)
       const us = { email };
       navigate(from)
       axios.post('http://localhost:4000/jwt', us ,  {withCredentials:true})
       .then(res => {
           console.log(res.data);
       })
       .catch(error => {
           console.log(error.message);
       });
     }
   })
   .catch(error=>{
     console.log(error)
     setError('invalid Email or Password!')
   })}
    return (
        <div  className="flex justify-between items-center max-w-6xl mx-auto px-5 ">
        <div className="w-1/2">
        <img src="https://i.postimg.cc/0jfnHHxp/login-page-4468581-3783954.png" alt="" />
    </div>


        <div className="hero min-h-screen max-w-8xl  p-4 w-1/2">
        <div className="hero-content flex-col w-[90%]">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-5xl font-bold text-gray-500">Login Here </h1>
           
          </div>
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100  p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
              <div className="relative ">
              <input  type={show ?"text" : 'password'} {...register('password' ,{ required: true })} name="password" placeholder="password" className="input input-bordered w-full" required />
              <span className="absolute top-4 right-3" onClick={()=>setShow(!show)}>{show ? <FaEye />: <FaEyeSlash />}</span>
              </div>
                
              </div>
              
               
              
              <div className="form-control mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign in
          </button>
                <p className="text-red-400">{error}</p>
              </div>
            </form>
          
            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>

          <div onClick={()=>handleSocialLogin(googleSignIn)}>
          <a  href="#" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
          <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
              <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
              <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
              <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
              <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
          </svg>

          <span className="mx-2">Sign in with Google</span>
      </a>
          </div>
            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>

            <a href="#" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <svg className="w-6 h-6 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>

                <span className="mx-2">Sign in with Github</span>
            </a>

            <div className="mt-6 text-center ">
                <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                    Don’t have an account yet? Sign up
                </a>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;