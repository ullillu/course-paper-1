import { districtPolygons } from "../../geo-objects-info/districtPolygons";
import { preschoolObjects } from "../../geo-objects-info/preschoolPoints";
import { districtPoints } from "../../geo-objects-info/districtPoints";

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

export const preschools = preschoolObjects.map( point => {
    return {
        index: point.title,
        coords: point.coordinates.point,
        preset: 'islands#blueFamilyIcon',
        hintContent: point.title,
    }
})

console.log(preschools.length)