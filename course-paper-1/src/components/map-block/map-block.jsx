import { Map, Placemark, Polygon, YMaps } from "react-yandex-maps";
import { districts, districtPoints } from "./index";

import "./map-block-style.css";


export const MapBlock = () => {
    return (
        <div className="map-block">
            <YMaps>
                <div className="map-block__title">map</div>
                <Map defaultState={{ center: [45.03, 39.0], zoom: 13 }}
                    height={ 600 }
                    width={ 900 }>
                    {
                        districts.map( (district, index) =>
                            <Polygon
                                key={ index }
                                geometry={[
                                    district.coords
                                ]}
                                options={{
                                    fillColor: district.fillColor,
                                    strokeColor: district.strokeColor,
                                    strokeWidth: 3,
                                    opacity: 0.8,
                                }}
                            />
                        )
                    }
                    {
                        districtPoints.map( (point, index) =>
                            <Placemark
                                key={ index }
                                geometry = {point.coords}
                                options = {{
                                    preset: point.preset
                                }}
                                properties = {{
                                    iconCaption: point.name
                                }}
                            />
                        )
                    }
                </Map>
            </YMaps>
        </div>
    );
}