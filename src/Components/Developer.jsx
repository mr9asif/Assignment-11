
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../App.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Developer = () => {
    return (
        <div>
        <div className='w-[95%] lg:max-w-7xl mx-auto'>
        <h1 data-aos='zoom-in-down' data-aos-duration="1200" className="tracking-[10px] text-green-600 font-semibold text-center text-xl my-6">Developer</h1>
        <h1 data-aos='zoom-in-down' data-aos-duration="1200" className="tracking-[5px] text-orange-500 font-semibold text-center text-3xl my-6">Meet Our Team Member</h1>

        <div className='w-[95%] lg:max-w-7xl mx-auto'>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div data-aos="fade-up"  data-aos-duration="1200"  className='flex flex-col justify-center lg:w-[300px] h-[160px] lg:h-[250px] items-center gap-1 shadow-lg  bg-gray-400'>
        <div className='  '>
         <img className='w-[full] h-[180px]  ' src="https://i.postimg.cc/25NQm2Qf/240-F-517432572-Q7c-WRe-Fs-AWb-Fjm-OCxb-JUn-Me-Eb-Lac-ZCEl.jpg" alt="" />
        </div>
        <div className='lg:p-2'>
       
           <h1 className='text-[13px] lg:text-xl font-bold text-gray-500'>Guider Name</h1>
            <h3 className='text-[13px] lg:text-xl  pb-3 font-bold text-orange-800'>ATLAN</h3>
        </div>
      </div>
  
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="fade-up"  data-aos-duration="1200"  className='flex flex-col justify-center lg:w-[300px]  h-[160px] lg:h-[250px] items-center gap-1 shadow-lg bg-gray-400'>
        <div className='  '>
         <img className='w-[full] h-[180px]' src="https://i.postimg.cc/jqD4Hwdm/image.jpg" alt="" />
        </div>
        <div className='p-2'>
        
           <h1 className='text-[13px] lg:text-xl font-bold text-gray-500'>Guider Name</h1>
            <h3 className='text-[13px] lg:text-xl  pb-3 font-bold text-orange-800'>ATLAN</h3>
        </div>
      </div>
  
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="fade-up"  data-aos-duration="1200"  className='flex flex-col justify-center  lg:w-[300px]  h-[160px] lg:h-[250px] items-center gap-1 shadow-lg  bg-gray-400'>
        <div className=' '>
         <img className='w-[full] h-[180px]' src="https://i.postimg.cc/DwTQ3xd3/depositphotos-294712776-stock-photo-young-handsome-indian-man-wearing.webp" alt="" />
        </div>
        <div className='p-2'>
       
           <h1 className='text-[13px] lg:text-xl font-bold text-gray-500'>Guider Name</h1>
            <h3 className='text-[13px] lg:text-xl pb-3 font-bold text-orange-800'>ATLAN</h3>
        </div>
      </div>
  
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="fade-up"  data-aos-duration="1200"  className='flex flex-col justify-center lg:w-[300px]  h-[160px] lg:h-[250px] items-center gap-1 shadow-lg  bg-gray-400'>
        <div className=' '>
         <img className='w-[full] h-[180px]' src="https://i.postimg.cc/Jh7bGt2T/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confide.jpg" alt="" />
        </div>
        <div className=''>
        
           <h1 className='text-[13px] lg:text-xl font-bold text-gray-500'>Guider Name</h1>
            <h3 className='text-[13px] lg:text-xl pb-3 font-bold text-orange-800'>ATLAN</h3>
        </div>
      </div>
  
        
        </SwiperSlide>
        
      
        
      </Swiper>
        </div>
    </div>
        </div>
    );
};

export default Developer;