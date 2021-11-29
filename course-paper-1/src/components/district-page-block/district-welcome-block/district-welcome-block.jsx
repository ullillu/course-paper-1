import React from 'react';

import { Link } from "react-router-dom";
import { Map, Polygon, YMaps } from "react-yandex-maps";

import './district-welcome-block.css'

const DistrictWelcomeBlock = ( props ) => {
    return (
        <div className={ "district-welcome-block" }>
            <header className={ "district-welcome-block__header" }>
                <h1 className={ "title" }>
                    Микрорайон { props.title } в Краснодаре
                </h1>
            </header>
            <aside>
                <nav className={ "district-welcome-block__nav" }>
                    <Link to="/" className={ "district-welcome-block__link" } >Карта районов Краснодара</Link>
                    <span>  /  { props.title }</span>
                </nav>
            </aside>

            <div className={ "district-welcome-block__main" }>

                <div className={ "district-welcome-block__map-wrapper" }>
                    <YMaps className={ "district-welcome-block__map" }>
                        <Map defaultState={{center: props.center, zoom: 13}}
                             height={'100%'}
                             width= {'100%'}>
                            <Polygon
                                geometry={[
                                    props.coordinates
                                ]}
                                options={{
                                    fillColor: '#ffcf48',
                                    strokeColor: '#ec9900',
                                    strokeWidth: 3,
                                    strokeOpacity: 1,
                                    opacity: 0.6,
                                }}
                            />
                        </Map>
                    </YMaps>
                </div>
                <div className={ "district-welcome-block__description" }>
                    <h2>
                        О районе
                    </h2>
                    <p className={ "description" }>
                        { props.description }
                    </p>
                </div>

            </div>
        </div>
    );
};

export default DistrictWelcomeBlock;