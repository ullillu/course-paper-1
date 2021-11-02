import { Map, Placemark, Polygon, YMaps, Clusterer } from "react-yandex-maps";
import { districts }  from "./index";

import "./map-block-style.css";
import {useEffect, useState} from "react";
import {parkObjects} from "../../geo-objects-info/parkObjects";
import {preschoolObjects} from "../../geo-objects-info/preschoolObjects";


const mapProps = {
    defaultState: {
        center: [45.06, 39.02],
        zoom: 11
    },
    height:  600,
    width: '100%',
};

export const MapBlock = ({ isFetching, objects }) => {

    return (
        <div className="map-block">
            {
                !isFetching &&
                <YMaps>
                    <Map { ...mapProps } >
                        {
                            districts.map( (district) =>
                                <Polygon
                                    key={ district.index }
                                    geometry={[
                                        district.coords
                                    ]}
                                    options={{
                                        fillColor: district.fillColor,
                                        strokeColor: district.strokeColor,
                                        strokeWidth: 3,
                                        opacity: 0.8,
                                    }}
                                    properties={{
                                        hintContent: district.hintContent,
                                    }}
                                    modules={
                                        ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                    }
                                />
                            )
                        }

                        {/*<Clusterer*/}
                        {/*    options={{*/}
                        {/*        preset: 'islands#invertedBlueClusterIcons',*/}
                        {/*        groupByCoordinates: false,*/}
                        {/*    }}*/}
                        {/*>*/}
                            {
                                objects.map( (obj) =>
                                    <Placemark
                                        key={ obj.index }
                                        geometry={
                                            obj.coords
                                        }
                                        options={{
                                            preset: obj.preset
                                        }}
                                        properties={{
                                            hintContent: obj.hintContent,
                                        }}
                                        modules={
                                            ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                        }
                                    />
                                )
                            }
                        {/*</Clusterer>*/}
                    </Map>
                </YMaps>
            }

        </div>
    );
}