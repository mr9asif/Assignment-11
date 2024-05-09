import { TypeAnimation } from "react-type-animation";


const Banner = () => {
    return (
        <div>
        <div className="hero h-[550px]" style={{backgroundImage: 'url(https://i.postimg.cc/Hxvvj0Hm/meet-the-team-jpg-width-595-height-400-name-meet-the-team.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full">
          <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'Discover Your BLOGNESTLE',
            1000,
            'Discover Your  BLOGNESTLE',
            1000,
            'Discover Your  BLOGNESTLE',
            1000,
            'Discover Your  BLOGNESTLE',
            1000,
          ]}
          speed={30}
          style={{ fontSize: '3rem' , color:'white', font:'bold' }}
          repeat={Infinity}
        />


          
            <p className="mb-5 text-xl text-gray-300 font-semibold">Journey Through Words, Your Gateway to Limitless Creativity - BlogNestle</p>
            <button className="btn btn-outline text-orange-300 hover:bg-orange-400 font-bold text-xl hover:text-white">Explore</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;