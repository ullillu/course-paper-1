import { MapBlock } from "../components/map-block/map-block";
import { useEffect, useState } from "react";
import { filterInfo } from "../components/map-block";
import axios from "axios";

import district from "../geo-objects-info/districts.json"
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const [filter, setFilter] = useState( filterInfo );
    const [isFetching, setIsFetching] = useState(true);
    const [objects, setObjects] = useState({});
    const [districts, setDistricts] = useState(district)
    const [objectManagerFilter, setObjectManagerFilter] = useState(() => () => true)

    useEffect(() => {
        setIsFetching(true);
        const getObjects = async () => {
            try {
                const response = await axios.get('https://api.jsonbin.io/v3/b/61856210ad0eb745bd8a3eff/latest',
                    {
                        headers: {
                            'X-Master-Key': '$2b$10$AWIF1wPhgs5.Zq3CswguneGsUKTzsgXOgIlcIdbDl5E6/Cda6ck..',
                            'X-Bin-Meta': 'false'
                        }})
                setObjects(response.data)
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        };
        getObjects();
        setIsFetching(false);

    }, [])

    // useEffect(() => {
    //     setIsFetching(true);
    //     const getDistricts = async () => {
    //         try {
    //             const response = await axios.get('https://api.jsonbin.io/v3/b/618561c53ea6754ce134d134/latest',
    //                 {
    //                     headers: {
    //                         'X-Master-Key': '$2b$10$AWIF1wPhgs5.Zq3CswguneGsUKTzsgXOgIlcIdbDl5E6/Cda6ck..',
    //                         'X-Bin-Meta': 'false'
    //                     }})
    //             setDistricts(response.data)
    //             console.log(response.data)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     };
    //     getDistricts();
    //     setIsFetching(false);
    //
    // }, [])

    const onSelect = (title) => {
        let filterTemp = filter;
        filterTemp[title]= !filterTemp[title];
        setFilter(filterTemp);

        makeHeatMap();

        setObjectManagerFilter( () => (object) => {
            return filter[object.properties.content]
        });
    }

    const makeHeatMap = () => {
        let total = Object.keys(filter).reduce( (total, current) => {
            return filter[current] ? total + 1 : total;
        }, 0);
        districts.forEach( (obj) => {
            let content = obj.properties.content;
            let result = Object.keys(content).reduce( (total, current) => {
                return content[current] && filter[current] ? total + 1 : total;
            }, 0);
            let percentage = (result * 100 / total);

            let R, G, B;
            if( percentage <= 50) {
                R = 255;
                G = (percentage / 50.0) * 255;
            }
            else {
                R = 255 - ((percentage - 50) / 50.0) * 255;
                G = 255;
            }
            B = 0;
            obj.options.fillColor = 'rgb(' + R + ',' + G + ',' + B + ')';

            // console.log(obj['properties']['name'], result, percentage)
        });
        setDistricts(districts);
    }

    const navigate = useNavigate();
    const onPolygonClick = (url) => {
        console.log(url)
        navigate(url);
    }

    return (
            <MapBlock
                isFetching={ isFetching }
                filter={ filter }
                districts={ districts }
                objects={ objects }
                onSelect={ onSelect }
                objectManagerFilter={ objectManagerFilter }
                onPolygonClick={ onPolygonClick }
            />
    )
}