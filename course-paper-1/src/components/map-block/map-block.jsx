import { Map, YMaps } from "react-yandex-maps";

import PolygonsContainer from "./polygons-container";
import ListBoxContainer from "./list-box-container";
import ObjectManagerContainer from "./object-manager-container";

import "./map-block-style.css";
import { mapProps } from "./index";

export const MapBlock = ( props ) => {

    return (
        <div className="map-block">
            {
                !props.isFetching &&
                <YMaps>
                    <Map { ...mapProps } >
                        <PolygonsContainer districts={ props.districts } onPolygonClick={ props.onPolygonClick }/>
                        <ListBoxContainer filter={ props.filter } onSelect={ props.onSelect }/>
                        <ObjectManagerContainer objects={ props.objects } objectManagerFilter={ props.objectManagerFilter }/>
                    </Map>
                </YMaps>
            }
        </div>
    );
}