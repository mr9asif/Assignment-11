 import video1 from '../Video/8051392-uhd_2160_3840_24fps.mp4'
const Review = () => {
  return (
    <div className='w-[95%] mx-auto lg:max-w-7xl'>
    <h1  data-aos="fade-up"
    data-aos-duration="2000" className='text-3xl font-bold text-green-500 text-center'>Why Contribute to Our Blog?</h1>
    <div className='md:flex lg:flex justify-evenly items-center max-w-7xl mx-auto gap-3 md:mx-4 my-12'>
          <div>
            <div  data-aos="fade-up"
            data-aos-duration="2000" className='flex justify-center items-center'>
            <img className='w-[300px] ' src="https://i.postimg.cc/8kmR3QYX/pngtree-blogger-review-concept-vector-picture-image-7756873.png" alt="Blogger Review Concept" />
            </div>
          <h1  data-aos="fade-up"
          data-aos-duration="2000" className='text-2xl font-bold text-orange-900'>Write for Us!</h1>
          <p  data-aos="fade-up"
          data-aos-duration="2000" className='text-[16px] mb-5 font-semibold text-gray-600'>Are you passionate about Technology,Food or News? Do you have insightful thoughts, experiences, or expertise that you want to share with the world? If so, we’d love to feature your content on our blog!</p>

          <h1  data-aos="fade-up"
          data-aos-duration="2000" className='text-2xl font-bold text-orange-900'>Why Contribute to Our Blog?</h1>
           <ul  data-aos="fade-up"
           data-aos-duration="2000" className='list-disc pl-6 text-gray-900'>
            <li className='text-[16px] mb-5 font-semibold text-gray-600'><span className='text-[17px] font-extrabold '>Reach a Wide Audience:</span> Our blog reaches thousands of readers who are interested in Technology,Food & News. By contributing, you can share your ideas with a large and engaged audience.</li>
            <li className='text-[16px] mb-5 font-semibold text-gray-600'><span className='text-[17px] font-extrabold '>Establish Your Expertise:</span> Writing for our blog is a great way to establish yourself as an expert in your field. Showcase your knowledge and experience to our readers.

            </li>
            <li className='text-[16px] mb-5 font-semibold text-gray-600'><span className='text-[17px] font-extrabold '>Build Your Online Presence: </span> Get your name out there! Contributing to our blog can help you build your personal brand and increase your online visibility.</li>
            </ul>
          </div>
    <div  data-aos="fade-up"
    data-aos-duration="2000" className='rounded-md p-2'>
        <video
            src={video1}
            className='rounded-xl'
            controls
            aria-label="Product Review Video"
            style={{ maxWidth: '400px', height: '600px' }}
            loop
            autoPlay
            muted
        >
            Your browser does not support the video tag.
        </video>
    </div>
</div>
    </div>
  );
};

export default Review;
