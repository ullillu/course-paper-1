import React from 'react';
import '../components/district-page-block/district-page-style.css';
import SwiperBlock from "../components/district-page-block/swiper-block/swiper-block";
import DistrictWelcomeBlock from "../components/district-page-block/district-welcome-block/district-welcome-block";
import ProsConsBlock from "../components/district-page-block/pros-cons-block/pros-cons-block";
import InfrastructureBlock from "../components/district-page-block/infrastructure-block/infrastructure-block";

const District = ( props ) => {
    return (
        <div className={ "district-page" }>
            <DistrictWelcomeBlock
                title={ props.district.name }
                coordinates={props.coordinates}
                center={props.district.center}
                description={ props.district.description }
            />
            <ProsConsBlock
                    pros={ props.district.pros }
                    cons={ props.district.cons }
            />
            <SwiperBlock images={ props.district.images }/>
            <InfrastructureBlock infrastructure={ props.district.infrastructure }/>
        </div>
    );
};

export default District;