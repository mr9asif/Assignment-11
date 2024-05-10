
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  const [theme, setTheme]= useState('light');
  const {user, signout}= useContext(AuthContext)
  console.log(user)



  useEffect(()=>{
       localStorage.setItem('theme', theme);
       const localStorageTheme = localStorage.getItem('theme')
      
        document.querySelector('html').setAttribute('data-theme', localStorageTheme)
           
       
  },[theme])

  const handleThemeChange=(e)=>{
    
    if(e.target.checked){
       setTheme('blue')
    }else{
      setTheme('light')
    }
  }

  const handleSignOut = async() =>{
   await  signout()
  }
    return (
        <div>
        <div className="navbar px-12 mx-auto max-w-8xl my-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink to='/' className={({isActive})=>isActive? 'text-bold text-orange-400' : 'text-bold' || 'hover:bg-green-500 text-[18px]'}>Home</NavLink>
            <NavLink to='/allblogs' className={({isActive})=>isActive? 'text-bold text-orange-400' : 'text-bold'}>All Blogs</NavLink>
            <NavLink to='/addblogs' className={({isActive})=>isActive? 'text-bold text-orange-400' : 'text-bold'}>ADD Blogs</NavLink>
            <NavLink to='featureblogs' className={({isActive})=>isActive? 'text-bold text-orange-400' : 'text-bold'}>FeaturedBlogs</NavLink>
            <NavLink to='/wishlistblogs' className={({isActive})=>isActive?'text-bold text-orange-400 text-[18px]' : 'font-bold text-white hover:text-green-500 text-[18px]'}>WishList</NavLink>
            <NavLink to='/about' className={({isActive})=>isActive?'text-bold text-orange-400 text-[18px]' : 'font-bold text-white hover:text-green-500 text-[18px]'}>About Us</NavLink>
            </ul>
          </div>
         
          <div className="flex items-center gap-2">
           <img className="w-[30px] lg:w-[60px] rounded" src="https://i.postimg.cc/dQR92n30/kisspng-blogger-computer-icons-website-png-icons-download-blogger-logo-5ab0b42b1c25e5-77595902152152.jpg" alt="" />
            <h1 className=" md:text-2xl lg:text-3xl font-bold text-green-400">BLOG<span className="text-orange-400">NESTLE</span></h1>
           </div>
        </div>
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-between  lg:gap-6">
        <NavLink to='/' className={({isActive})=>isActive? 'font-extrabold text-orange-400 underline  text-[18px]' : 'font-bold text-green-600 hover:text-orange-400 text-[18px]' }>Home</NavLink>
        <NavLink to='/allblogs' className={({isActive})=>isActive? ' font-bold text-orange-400 underline text-[18px]' : 'font-bold text-green-600 hover:text-orange-400 text-[18px]'}>All Blogs</NavLink>
       {
        user &&  <NavLink to='/addblogs' className={({isActive})=>isActive?' font-bold text-orange-400 underline text-[18px]' : 'font-bold text-green-600 hover:text-orange-400 text-[18px]'}>ADD Blogs</NavLink>
       }
       {
         <NavLink to='/featureblogs' className={({isActive})=>isActive?' font-bold text-orange-400 underline text-[18px]' : 'font-bold text-green-600 hover:text-orange-400 text-[18px]'}>Featured Blogs</NavLink>
       }
       {
         user &&  <NavLink to='/wishlistblogs' className={({isActive})=>isActive?' text-orange-400 font-bold underline text-[18px]' : 'font-bold text-green-600 hover:text-orange-400 text-[18px]'}>WishLists</NavLink>
       }
        <NavLink to='/about' className={({isActive})=>isActive?'font-bold text-orange-400 underline text-[18px]' : 'font-bold text-green-600 hover:text-orange-400 text-[18px]'}>About Us</NavLink>
       
    
        
      </ul>
        </div>
        <div className="navbar-end">
   
        {
          user ? (
              
            <div className={`flex items-center gap-4 `}>
            {user.photoURL ? (
              <img  src={user.photoURL} alt="" className={`w-[50px] rounded-[50%] `} />
          ) : (
            <img src="https://i.postimg.cc/gjR4qBVg/blank-profile-picture-973460-1280.png" alt="" className="w-[45px] p-1 border rounded-[50%]" />
          )}
           
                  <Link onClick={handleSignOut} className="btn btn-outline text-orange-400 hover:bg-orange-400 font-bold text-xl hover:text-white">
                      Sign out
                  </Link>
              </div>
          ) : (
            <div>
            <Link className="mr-5 btn btn-outline text-orange-400 hover:bg-orange-400 font-bold text-xl hover:text-white" to='/register'>
                Register
            </Link>
            <Link className="btn btn-outline text-orange-400 hover:bg-orange-400 font-bold text-xl hover:text-white" to='/login'>
                Login
            </Link>
        </div>
          )
      }
     
   
             
         <div className="mx-4">
         <label className="swap swap-rotate">

         {/* this hidden checkbox controls the state */}
         <input type="checkbox" className="theme-controller" onClick={handleThemeChange} value="synthwave" />
         
         {/* sun icon */}
         <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
         
         {/* moon icon */}
         <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
         
       </label>
          
         </div>
        </div>
      </div>

        </div>
    );
};

export default Navbar;