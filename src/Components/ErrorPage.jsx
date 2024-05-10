import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="max-w-2xl mx-auto my-24 relative">
            <img src="https://i.postimg.cc/m2mbvNcZ/404-error-with-portals-concept-illustration-114360-7870.jpg" alt="" />
             <Link className="absolute bottom-4 right-24 btn btn-outline text-orange-400 hover:bg-orange-400 font-bold text-xl hover:text-white" to='/'>Home</Link>
            </div>
    );
};

export default ErrorPage;