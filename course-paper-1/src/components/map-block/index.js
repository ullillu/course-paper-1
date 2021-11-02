import { districtPolygons } from "../../geo-objects-info/districtPolygons";
import { districtPoints } from "../../geo-objects-info/districtPoints";
import {preschoolObjects} from "../../geo-objects-info/preschoolObjects";


export const districts = districtPolygons.map( district  => {
    return {
        index: district.id,
        fillColor: district.options.fillColor,
        strokeColor: district.options.strokeColor,
        coords: district.geometry.coordinates.map( coords => [coords[1],coords[0]] ),
        hintContent: district.properties.name,
    }
})

export const districtsPoints = districtPoints.map( point => {
    return {
        index: point.id,
        coords: [point.geometry.coordinates[1],point.geometry.coordinates[0]],
        preset: point.options.preset,
        hintContent: point.properties.iconCaption,
    }
})



const preschoolsDistricts = new Set();

preschoolObjects.map( obj => {
    preschoolsDistricts.add(obj.address_region.title)
})




