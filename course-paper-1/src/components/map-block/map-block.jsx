import { Map, Polygon, YMaps, ListBox, ListBoxItem, ObjectManager } from "react-yandex-maps";

import "./map-block-style.css";

const mapProps = {
    defaultState: {
        center: [45.06, 39.02],
        zoom: 12
    },
    height:  800,
    width: '100%',
    modules: [
        'templateLayoutFactory',
        'layout.PieChart'
    ]
};

export const MapBlock = ({ isFetching, districts, objects, onSelect, filter, objectManagerFilter }) => {

    return (
        <div className="map-block">
            {
                !isFetching &&
                <YMaps>
                    <Map { ...mapProps } >
                        {
                            districts.map( (district) => {
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
                                    />)
                            })
                        }
                        <ListBox
                            data={{ content: 'Фильтр' }}
                            state={{
                                expanded: true,
                            }}
                        >
                            {
                                Object.entries(filter).map( ([key, value]) => {
                                    return (
                                        <ListBoxItem data={{ content: key }}
                                                     state={{ selected: value }}
                                                     onSelect={ () => onSelect(key) }
                                                     onDeselect={ () => onSelect(key) }
                                                     key={ key }
                                        />
                                    )})
                            }
                        </ListBox>
                        <ObjectManager
                            options={{
                                clusterize: true,
                                gridSize: 64,
                                clusterIconLayout: 'default#pieChart'

                            }}
                            filter={ objectManagerFilter }
                            features={ objects }
                            modules={[
                                'objectManager.addon.objectsHint',
                            ]}

                        />
                    </Map>
                </YMaps>
            }
        </div>
    );
}