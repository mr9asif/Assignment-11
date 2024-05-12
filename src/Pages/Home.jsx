
import RecentBlogs from '../Blogs/RecentBlogs';
import AboutUs from '../Components/AboutUs';
import Banner from '../Components/Banner';
import Developer from '../Components/Developer';
import Feedback from '../Components/Feedback';
import NewsLetter from '../Components/NewsLetter';
import Question from '../Components/Question';
import Review from '../Components/Review';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <RecentBlogs></RecentBlogs>
            {/* blogging*/}
            <Question></Question>
             <Review></Review>
            <Developer></Developer>
            <Feedback></Feedback>
        <NewsLetter></NewsLetter>
        
        </div>
    );
};

export default Home;