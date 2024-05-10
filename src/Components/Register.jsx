import { useContext,  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
    const { creatUser, updateUser } = useContext(AuthContext);
    const [show, setShow] = useState(false)
    const navigate = useNavigate();

   

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { email, password, name, image } = data;
        console.log(data)
        creatUser(email, password)
            .then(result => {
                if (result.user) {
                       toast.success('you successfully register')
                    updateUser(name, image)
                        .then(() => {
                            navigate('/');
                        })
                        .catch(error => {
                            console.error("Error updating user profile:", error);
                        });
                }
            })
            .catch(error => {
                console.error("Error creating user:", error);
            });
    };



    return (
        <div className="flex justify-between items-center max-w-6xl mx-auto px-5">
            <div className="w-1/2">
                <img src="https://i.postimg.cc/sxSVzXPy/sign-up-8044864-6430773.png" alt="" />
            </div>

        <div className="hero  max-w-8xl mx-auto w-full ">
            <div className="hero-content flex-col w-full   ">
                <div className="text-center lg:text-left ">
                    <h1 className="text-3xl font-bold text-gray-400">Register Here </h1>
                    
                </div>
                <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Image</span>
                            </label>
                            <input {...register("image")} type="text" placeholder="Image URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                            <input type={show ? "text" : 'password'} {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/,
                                    message: "Password must contain at least one capital letter and one special character"
                                }
                            })} placeholder="password" className="input input-bordered w-full" required />
                            <span className="absolute top-4 right-3" onClick={()=>setShow(!show)}>{show ? <FaEye />: <FaEyeSlash />}</span>
                            </div>
                            {errors.password && errors.password.type === "pattern" && (
                                <p className="text-red-500">Password must contain at least one capital letter and one special character.</p>
                            )}
                            {errors.password && errors.password.type === "minLength" && (
                                <p className="text-red-500">Password must be at least 6 characters long.</p>
                            )}
                        </div>
                        <p className="text-[14px] lg:text-[18px] ">
                        If you don't have any account? please <Link className="underline font-semibold" to ='/login'>Login</Link>
                        </p>
                        <div className="form-control mt-6 bg-orange-500 hover:bg-orange-800 py-2 px-4 rounded-xl text-white font-semibold cursor-pointer">
                            <input className="cursor-pointer" type="submit" value='Register' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;