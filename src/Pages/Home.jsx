
import RecentBlogs from '../Blogs/RecentBlogs';
import AboutUs from '../Components/AboutUs';
import Banner from '../Components/Banner';
import NewsLetter from '../Components/NewsLetter';
import Testimonial from '../Components/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <RecentBlogs></RecentBlogs>
            {/* blogging*/}
        <NewsLetter></NewsLetter>
        <Testimonial></Testimonial>
        </div>
    );
};

export default Home;