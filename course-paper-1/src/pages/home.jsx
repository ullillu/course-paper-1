import { FilterBlock } from "../components/filter-block/filter-block";
import { MapBlock } from "../components/map-block/map-block";
import { useEffect, useState } from "react";
import { preschoolObjects } from "../geo-objects-info/preschoolObjects";
import { parkObjects } from "../geo-objects-info/parkObjects";
import { checkboxes } from "../components/filter-block/checkboxesInfo";

export const Home = () => {
    const [filter, setFilter] = useState( checkboxes );
    const [isFetching, setIsFetching] = useState(true);
    const [objects, setObjects] = useState([]);

    const onFilterChange = ({ target: { name } }) => {
        let index = filter.findIndex(i => i.name === name);
        let filterTemp = filter;

        filterTemp[index].isShown = !filterTemp[index].isShown;

        setFilter(filterTemp);
        setIsFetching(true);
        setObjects(refactorObjects());
        setIsFetching(false);
        console.log(filterTemp)
    };

    useEffect(() => {
        console.log("useEffect")
        setIsFetching(true)
        setObjects(refactorObjects());
        setIsFetching(false)

    }, []);

    const refactorObjects = () => {
        let temp = [];
        let length = filter.length;

        for (let i = 0; i < length; i++) {
            if (filter[i].isShown) {
                let objAmount;
                if (filter[i].name === "park") {
                    objAmount = parkObjects.length;
                    for (let j = 0; j < objAmount; j++) {
                        temp.push(
                            {
                                index: parkObjects[j].title,
                                coords: [Number.parseFloat(parkObjects[j].coordinates.point[0]), Number.parseFloat(parkObjects[j].coordinates.point[1])],
                                preset: 'islands#blueVegetationIcon',
                                hintContent: parkObjects[j].title,
                            }
                        )
                    }
                }
                if (filter[i].name === "preschool") {
                    objAmount = preschoolObjects.length;
                    for (let j = 0; j < objAmount; j++) {
                        temp.push(
                            {
                                index: preschoolObjects[j].title,
                                coords: [Number.parseFloat(preschoolObjects[j].coordinates.point[0]), Number.parseFloat(preschoolObjects[j].coordinates.point[1])],
                                preset: 'islands#blueFamilyIcon',
                                hintContent: preschoolObjects[j].title,
                            }
                        )
                    }
                }
            }
        }
        // setObjects(temp)
        return temp;
    };

    return (
        <>
            <FilterBlock onChange={ onFilterChange } filter={ filter }/>
            <MapBlock isFetching={ isFetching }  objects={ objects }/>
        </>
    )
}