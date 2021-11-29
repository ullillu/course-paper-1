import React from 'react';
import { Navigation } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import './swiper-block-styles.css'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore from 'swiper';
SwiperCore.use([Navigation]);

const SwiperBlock = ( props ) => {
    return (
        <div className={ "swiper-block" }>
            <Swiper
                modules={[Navigation]}
                spaceBetween={ 50 }
                slidesPerView={ 3 }
                navigation
                loop={true}
            >
                {
                    props.images.map( (image, index) => {
                        return (
                            <SwiperSlide key={ index }>
                                <img
                                src={ image }
                                alt={ "Krasnodar" }
                                />
                            </SwiperSlide>
                        )})
                }
            </Swiper>
        </div>
    );
};

export default SwiperBlock;