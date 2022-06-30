import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, A11y, Autoplay} from 'swiper';
import Bannar1 from "../../../images/banner7.jpg";
import Bannar2 from "../../../images/banner8.jpg";
import Bannar3 from "../../../images/banner9.jpg";

import 'swiper/css';
import "./main-carousel-style.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const MainCarousel = () => {
    const navigateTo = useNavigate();

    return (
        <Swiper
            className={"landing-carousel"}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            slidesPerView={1}
            navigation={true}
            pagination={{clickable: true}}
            speed={2000}
            autoplay={true}
        >
            <SwiperSlide>
                <div className="item" style={{backgroundImage: `url(${Bannar1})`}}>
                    <div className="carousel-content">
                        <h5 className="caption-header-text">Get up to 50% off Today Only!</h5>
                        <h2 className="caption-title-text">Wooden Chair Collection</h2>
                        <p className="caption-des">

                        </p>
                        <Button
                            variant={"outlined"}
                            onClick={() => navigateTo('/')}
                        >
                            Shop Now
                        </Button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="item" style={{backgroundImage: `url(${Bannar2})`}}>
                    <div className="carousel-content">
                        <h5 className="caption-header-text">Get up to 50% off Today Only!</h5>
                        <h2 className="caption-title-text">Wooden Chair Collection</h2>
                        <p className="caption-des">

                        </p>
                        <Button
                            variant={"outlined"}
                            onClick={() => navigateTo('/')}
                        >
                            Shop Now
                        </Button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="item" style={{backgroundImage: `url(${Bannar3})`}}>
                    <div className="carousel-content">
                        <h5 className="caption-header-text">Get up to 50% off Today Only!</h5>
                        <h2 className="caption-title-text">Wooden Chair Collection</h2>
                        <p className="caption-des">

                        </p>
                        <Button
                            variant={"outlined"}
                            onClick={() => navigateTo('/')}
                        >
                            Shop Now
                        </Button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default MainCarousel;