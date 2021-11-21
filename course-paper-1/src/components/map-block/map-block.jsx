import { Map, YMaps } from "react-yandex-maps";

import PolygonsContainer from "./polygons-container";
import ListBoxContainer from "./list-box-container";
import ObjectManagerContainer from "./object-manager-container";
import MapLegend from "./map-legend";

import "./map-block-style.css";
import { mapProps } from "./index";

export const MapBlock = ( props ) => {
    return (
        <div id="map" className={ "map-block" } >
            <header>
                <h1 className={ "map-block__title" }>
                    Карта районов Краснодара
                </h1>
            </header>
            <div className={ "map-block__map-wrapper" }>
                <YMaps className={ "map-block__map" }>
                    <Map { ...mapProps } >
                        <PolygonsContainer districts={ props.districts } onPolygonClick={ props.onPolygonClick }/>
                        <ListBoxContainer filter={ props.filter } onSelect={ props.onSelect }/>
                        <ObjectManagerContainer objects={ props.objects } objectManagerFilter={ props.objectManagerFilter }/>
                    </Map>
                </YMaps>
                <MapLegend/>
            </div>
        </div>
    );
}