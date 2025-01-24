import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import img1 from '../assets/pexels-enginakyurt-15483667.jpg'
import img2 from '../assets/pexels-jeshoots-7522.jpg'
import img3 from '../assets/pexels-vectors-icon-355704-968299.jpg'

// import './styles.css'
const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                modules={[Pagination, Autoplay, Navigation]}
                autoplay = {{
                    delay :2000,
                    disableOnInteraction :false,
                    pauseOnMouseEnter: true,
                }}
                pagination={
                    {
                        clickable:true,
                    }
                }
                
                loop = {true}
                navigation={true}
                className='mySwiper'
            >
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
              
            </Swiper>
        </div>
    );
};

export default Slider;  