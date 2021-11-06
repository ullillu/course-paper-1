import React from 'react';
import { Polygon } from "react-yandex-maps";

const PolygonsContainer = ( props ) => {
    return (
        <div className={ "polygons-container" }>
            {
                props.districts.map( (district) => {
                    return (
                        <Polygon
                            key={district.id}
                            geometry={[
                                district.geometry.coordinates
                            ]}
                            options={{
                                fillColor: district.options.fillColor,
                                strokeColor: '#B7B7B7',
                                strokeWidth: 3,
                                opacity: 0.6,
                            }}
                            properties={{
                                hintContent: district.properties.name,
                            }}
                            modules={
                                ['geoObject.addon.hint']
                            }
                            onClick={ () => props.onPolygonClick(district.properties.url) }
                        />)
                })
            }
        </div>
    );
};

export default PolygonsContainer;