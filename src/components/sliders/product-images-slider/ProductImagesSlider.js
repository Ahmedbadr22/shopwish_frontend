import "./product-images-slider.css";
import {Navigation, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import productImage from "../../../images/product-image1.png";

const ProductImagesSlider = () => {
    return (
        <Swiper
            className={"main-product-slider"}
            modules={[Navigation, A11y, Autoplay]}
            slidesPerView={4}
            navigation={true}
            speed={1500}
            breakpoints={{
                300: {
                    slidesPerView: 3,
                },
                770: {
                    slidesPerView: 2,
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
            loop={true}
            autoplay={true}
        >
            <SwiperSlide className={""}>
                <img src={productImage} alt="" style={{width: "98%", height: "98%"}}/>
            </SwiperSlide>
            <SwiperSlide className={""}>
                <img src={productImage} alt="" style={{width: "98%", height: "98%"}}/>
            </SwiperSlide>
            <SwiperSlide className={""}>
                <img src={productImage} alt="" style={{width: "98%", height: "98%"}}/>
            </SwiperSlide>
            <SwiperSlide className={""}>
                <img src={productImage} alt="" style={{width: "98%", height: "98%"}}/>
            </SwiperSlide>
            <SwiperSlide className={""}>
                <img src={productImage} alt="" style={{width: "98%", height: "98%"}}/>
            </SwiperSlide>
        </Swiper>
    );
};

export default ProductImagesSlider;