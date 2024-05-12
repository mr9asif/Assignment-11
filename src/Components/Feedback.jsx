import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../App.css'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Feedback = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className="my-6 w-[96%] lg:max-w-7xl mx-auto mt-12">
        <h1 data-aos='zoom-in-up' data-aos-duration="1000" className="tracking-[12px] font-semibold text-xl text-center text-green-400">CONTRIBUTORS</h1>
        <h1 data-aos='zoom-in-down' data-aos-duration="1000" className="tracking-[6px] mb-8 font-semibold text-4xl text-center text-orange-800 mt-4">Our Contributors</h1>
        
        <div className='h-[300px]'>
        <Swiper
        spaceBetween={30}
        slidesPerView={4}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div  data-aos="fade-right"  data-aos-duration="1200" className='flex flex-col justify-center h-[250px] items-center gap-1 shadow-lg p-3 bg-gray-400'>
            <div className='w-[120px] h-[100px] p-1 '>
             <img className='border rounded-[50%]' src="https://i.postimg.cc/Jhp5xP6H/Picsart-24-01-11-19-58-30-317.jpg" alt="" />
            </div>
            <div className=''>
            <p className='text-[13px] font-semibold text-gray-700'>I'm thrilled to contribute! Your platform provides a valuable space for sharing insights and ideas!</p>
               <h1 className='text-xl font-bold text-gray-500'>Contributor Name</h1>
                <h3 className='text-xl font-bold text-orange-800'>Asif Khan</h3>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide>
        <div  data-aos="fade-right"  data-aos-duration="1200"  className='flex flex-col justify-center h-[250px] items-center gap-1 shadow-lg p-3 bg-gray-400'>
            <div className='w-[120px] h-[100px] p-1 '>
             <img className='border rounded-[50%]' src="https://i.postimg.cc/K8qJ90sh/download.jpg" alt="" />
            </div>
            <div className=''>
            <p className='text-[13px] font-semibold text-gray-700'>Contributing here feels like joining a family of passionate thinkers. Looking forward to more exchanges!</p>
               <h1 className='text-xl font-bold text-gray-500'>Contributor Name</h1>
                <h3 className='text-xl font-bold text-orange-800'>ATLAN</h3>
            </div>
          </div>
      
        </SwiperSlide>
        <SwiperSlide>
        <div  data-aos="fade-right"  data-aos-duration="1200"  className='flex flex-col justify-center h-[250px] items-center gap-1 shadow-lg p-3 bg-gray-400'>
            <div className='w-[120px] h-[100px] p-1 '>
             <img className='border rounded-[50%]' src="https://i.postimg.cc/jSzT5Wx2/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-st.jpg" alt="" />
            </div>
            <div className=''>
            <p className='text-[13px] font-semibold text-gray-700'>t's empowering to be part of a community where my voice matters. Keep up the great work</p>
               <h1 className='text-xl font-bold text-gray-500'>Contributor Name</h1>
                <h3 className='text-xl font-bold text-orange-800'>RAKA</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div  data-aos="fade-right"  data-aos-duration="1200"  className='flex flex-col justify-center h-[250px] items-center gap-1 shadow-lg p-3 bg-gray-400'>
            <div className='w-[120px] h-[100px] p-1 '>
             <img className='border rounded-[50%]' src="https://i.postimg.cc/htTvCwMT/pexels-photo-771742.jpg" alt="" />
            </div>
            <div className=''>
            <p className='text-[13px] font-semibold text-gray-700'>I appreciate the chance to contribute to such a vibrant platform. Let's keep the dialogue going</p>
               <h1 className='text-xl font-bold text-gray-500'>Contributor Name</h1>
                <h3 className='text-xl font-bold text-orange-800'>Ahsan</h3>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide >
        <div  data-aos="fade-right"  data-aos-duration="1200"  className='flex flex-col justify-center h-[250px] items-center gap-1 shadow-lg p-3 bg-gray-400'>
            <div className='w-[120px] h-[100px] p-1 '>
             <img className='border rounded-[50%]' src="https://i.postimg.cc/pyb7bZnZ/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg" alt="" />
            </div>
            <div className=''>
            <p className='text-[13px] font-semibold text-gray-700'>Being able to share my perspectives here is truly fulfilling. Thanks for fostering this inclusive environment!</p>
               <h1 className='text-xl font-bold text-gray-500'>Contributor Name</h1>
                <h3 className='text-xl font-bold text-orange-800'>PILU</h3>
            </div>
          </div>
        </SwiperSlide>
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </div>
    </div>
    );
};

export default Feedback;
