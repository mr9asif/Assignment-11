import { Link } from "react-router-dom";


const AboutUs = () => {
    
    return (
        <div>
            
        <div className="max-w-[95%]  lg:max-w-7xl mx-auto  my-12 mb-9">
         
        <div className="flex items-center ">
        <div  data-aos="fade-up"
        data-aos-duration="3000">
        <img  className="w-[600px] md:w-[500px] lg:w-[900px] h-[300px] md:h-[400px] lg:h-[650px]" src="https://i.postimg.cc/ZRtNWV1T/blogging-083016.jpg" alt="" />
        </div>
        <div  data-aos="fade-down"
        data-aos-duration="3000" className="bg-gray-500 md:w-[600px] lg:w-[1000px] h-[430px] md:h-[460px] lg:h-[560px] p-6 relative md:right-10 lg:right-16">
         <h2 className="text-xl lg:text-2xl font-bold text-green-900">ABOUT US</h2>
         <h3 className="text-2xl lg:text-4xl text-gray-400 font-bold mb-2 mt-1">We Provide Best Blogs in our Website!</h3>
         <p className="text-[13px] lg:text-[16px] mb-3 text-gray-800">BlogNestle is dedicated to providing nourishing content that informs, inspires, and satisfies our community</p>
          <div className="flex items-center gap-3">
          <img data-aos="flip-right" data-aos-duration="1500" className="w-[90px] md:w-[140px] lg:w-[260px]" src="https://i.postimg.cc/c1KJpQjh/What-is-blogging.jpg" alt="" />
          <img data-aos="flip-left" data-aos-duration="1500" className="w-[90px] md:w-[120px] lg:w-[210px]" src="https://i.postimg.cc/FHxFyGdr/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg" alt="" />
          </div >
          <Link to='/about'><button className="group relative flex w-32 items-center rounded-lg border-2 border-sky-400 p-4 text-sky-300"><span>See More</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button></Link>
        </div>
        </div>
     </div>
        </div>
    );
};

export default AboutUs;