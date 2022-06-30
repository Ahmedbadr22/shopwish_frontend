import MainCarousel from "../components/sliders/main-carousel/MainCarousel";
import OurService from "../components/sections/our-service/OurService";
import DealsOfTheWeek from "../components/sections/product-sections/deals-of -the-week/DealsOfTheWeek";


const Home = () => {
    return(
        <>
            <MainCarousel />
            <OurService />
            <DealsOfTheWeek />
        </>
    );
};

export default Home;