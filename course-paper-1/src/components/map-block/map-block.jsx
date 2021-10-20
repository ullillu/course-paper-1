import { Map, Placemark, Polygon, YMaps, Clusterer } from "react-yandex-maps";
import { districts, districtsPoints } from "./index";

import "./map-block-style.css";

const mapProps = {
    defaultState: {
        center: [45.06, 39.02],
        zoom: 11
    },
    height:  600,
    width: '100%',
};

export const MapBlock = () => {
    return (
        <div className="map-block">
            <YMaps>
                <Map {...mapProps} >
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

                    <Clusterer
                        options={{
                            preset: 'islands#invertedBlueClusterIcons',
                            groupByCoordinates: false,
                        }}
                    >
                        {
                            districtsPoints.map( (preschool) =>
                                <Placemark
                                    key={ preschool.index }
                                    geometry={
                                        preschool.coords
                                    }
                                    options={{
                                        preset: preschool.preset
                                    }}
                                    properties={{
                                        hintContent: preschool.hintContent,
                                    }}
                                    modules={
                                        ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                    }
                                />
                            )
                        }
                    </Clusterer>
                </Map>
            </YMaps>
        </div>
    );
}