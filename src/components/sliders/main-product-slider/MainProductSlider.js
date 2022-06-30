import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Navigation} from "swiper";
import MainProductCard from "../../cards/product-cards/main-product-card/MainProductCard";


const MainProductSlider = () => {
    return (
        <Swiper
            className={"main-product-slider py-3"}
            modules={[Navigation, A11y, Autoplay]}
            slidesPerView={4}
            navigation={true}
            speed={1500}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                },
                770: {
                    slidesPerView: 2    ,
                },
                // when window width is >= 640px
                995: {
                    slidesPerView: 3,
                },
                // when window width is >= 768px
                1200: {
                    slidesPerView: 4,
                },
            }}
            autoplay={true}
        >
            <SwiperSlide className={"d-flex justify-content-center"}>
                <MainProductCard/>
            </SwiperSlide>
            <SwiperSlide className={"d-flex justify-content-center"}>
                <MainProductCard/>
            </SwiperSlide>
            <SwiperSlide className={"d-flex justify-content-center"}>
                <MainProductCard/>
            </SwiperSlide>
            <SwiperSlide className={"d-flex justify-content-center"}>
                <MainProductCard/>
            </SwiperSlide>
            <SwiperSlide className={"d-flex justify-content-center"}>
                <MainProductCard/>
            </SwiperSlide>
            <SwiperSlide className={"d-flex justify-content-center"}>
                <MainProductCard/>
            </SwiperSlide>
            <SwiperSlide className={"d-flex justify-content-center"}>
                <MainProductCard/>
            </SwiperSlide>
        </Swiper>
    );
};

export default MainProductSlider;