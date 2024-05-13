import toast, { Toaster } from 'react-hot-toast';




const NewsLetter = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        // const subscribe = {name, email};
            if (email && name){
                toast.success('You Subscribe Newsletter Successfully!');
            }
    }
    return (
        <div  data-aos="fade-up"
        data-aos-duration="2000" className="md:flex lg:flex justify-between items-center max-w-5xl mx-auto my-12 px-8">
                  <div className="lg:w-1/2" >
                  <img className="w-[95%] mx-auto lg:w-[1000px]" src="https://i.postimg.cc/P5wq8fVc/3551757.webp" alt="" />
                  </div>

        <div className="lg:w-1/2 p-4">
        <h2  data-aos="fade-up"
        data-aos-duration="2000" className=" font-semibold text-lg text-green-700 mb-2"> Stay Informed, Inspired, and Connected Every Week to</h2>
        <h2  data-aos="fade-up"
        data-aos-duration="2000" className="text-lg font-semibold mb-2 text-orange-400">Subscribe  Our Newsletter</h2>
        <form  data-aos="fade-up"
        data-aos-duration="2000" onSubmit={handleSubmit} className="flex flex-col p-6 ">
            <input
                type="text"
                 name="name"
              
                placeholder="Your Name"
                className="w-full sm:w-auto px-4 py-2 mb-2 sm:mr-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                required
            />
          
            <input
                type="email"
                 name="email"
              
                placeholder="Your email address"
                className="w-full sm:w-auto px-4 py-2 mb-2 sm:mr-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                required
            />
            <button
                type="submit"
                className="w-full sm:w-auto bg-orange-400 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-orange-600 focus:outline-none"
            >
                Subscribe
            </button>
        </form>
    </div>
    <Toaster/>
        </div>
    );
};

export default NewsLetter;