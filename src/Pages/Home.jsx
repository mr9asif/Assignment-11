
import RecentBlogs from '../Blogs/RecentBlogs';
import AboutUs from '../Components/AboutUs';
import Banner from '../Components/Banner';
import NewsLetter from '../Components/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <RecentBlogs></RecentBlogs>
            {/* blogging*/}
        <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;