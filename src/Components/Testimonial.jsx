import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../App.css'
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Testimonial = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className="my-6 w-[96%] lg:max-w-7xl mx-auto mt-12">
        <h1 data-aos='zoom-in-up' data-aos-duration="1000" className="tracking-[12px] font-semibold text-xl text-center text-green-400">TESTOMONIAL</h1>
        <h1 data-aos='zoom-in-down' data-aos-duration="1000" className="tracking-[6px] mb-8 font-semibold text-4xl text-center text-orange-800">What Say Our Clients</h1>
        
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
             <img className='border rounded-[50%]' src="https://i.postimg.cc/CKkBtRwm/handsome-bearded-guy-posing-against-white-wall-273609-20597.jpg" alt="" />
            </div>
            <div className=''>
            <p className='text-[13px] font-semibold text-gray-700'>Smooth booking, great tips, excellent experience. Highly recommend TRAVELER!</p>
               <h1 className='text-xl font-bold text-gray-500'>Client Name</h1>
                <h3 className='text-xl font-bold text-orange-800'>JHON WICK</h3>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide>
        <div  data-aos="fade-right"  data-aos-duration="1200"  className='flex flex-col justify-center h-[250px] items-center gap-1 shadow-lg p-3 bg-gray-400'>
            <div className='w-[120px] h-[100px] p-1 '>
             <img className='border rounded-[50%]' src="https://i.postimg.cc/3rC2g1tF/young-bearded-man-with-striped-shirt-273609-5677.jpg" alt="" />
            </div>
            <div className=''>
            <p className='text-[13px] font-semibold text-gray-700'>TRAVELER exceeded my expectations! Flawless booking, incredible destinations, fantastic service.</p>
               <h1 className='text-xl font-bold text-gray-500'>Client Name</h1>
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
            <p className='text-[13px] font-semibold text-gray-700'>Unforgettable journey thanks to TRAVELER! Seamless booking, breathtaking destinations, top-notch recommendations.</p>
               <h1 className='text-xl font-bold text-gray-500'>Client Name</h1>
                <h3 className='text-xl font-bold text-orange-800'>RAKA</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div  data-aos="fade-right"  data-aos-duration="1200"  className='flex flex-col justify-center h-[250px] items-center gap-1 shadow-lg p-3 bg-gray-400'>
            <div className='w-[120px] h-[100px] p-1 '>
             <img className='border rounded-[50%]' src="https://i.postimg.cc/Gt8FJnt7/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg" alt="" />
            </div>
            <div className=''>
            <p className='text-[13px] font-semibold text-gray-700'>TRAVELER made trip planning a breeze! Exceptional service, valuable insights, unforgettable memories.</p>
               <h1 className='text-xl font-bold text-gray-500'>Client Name</h1>
                <h3 className='text-xl font-bold text-orange-800'>RYAN</h3>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide >
        <div  data-aos="fade-right"  data-aos-duration="1200"  className='flex flex-col justify-center h-[250px] items-center gap-1 shadow-lg p-3 bg-gray-400'>
            <div className='w-[120px] h-[100px] p-1 '>
             <img className='border rounded-[50%]' src="https://i.postimg.cc/pyb7bZnZ/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg" alt="" />
            </div>
            <div className=''>
            <p className='text-[13px] font-semibold text-gray-700'>Highly impressed with TRAVELER! Seamless booking, diverse destinations, exceptional customer service. 10/10!</p>
               <h1 className='text-xl font-bold text-gray-500'>Client Name</h1>
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

export default Testimonial;