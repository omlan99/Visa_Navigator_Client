import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import BannerImg1 from "../assets/pexels-enginakyurt-15483667.jpg"
import BannerImg2 from "../assets/pexels-jeshoots-7522.jpg"
import BannerImg3 from "../assets/pexels-vectors-icon-355704-968299.jpg"

const Banner = () => {
    return (
        <div>
            <Carousel >
                <div>
                    <img src={BannerImg1} alt="" />
                    <p></p>
                </div>
                <div>
                    <img src={BannerImg2} alt="" />
                    <p></p>
                </div>
                <div>
                    <img src={BannerImg3} alt="" />
                    <p></p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;