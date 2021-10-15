import { geoPolygons, geoPoints } from "./mapObjects";

export const districts = geoPolygons.map( district  => {
    return {
        fillColor: district.options.fillColor,
        strokeColor: district.options.strokeColor,
        coords: district.geometry.coordinates.map( coords => [coords[1],coords[0]] )
    }
})

export const districtPoints = geoPoints.map( point => {
    return {
        coords: [point.geometry.coordinates[1],point.geometry.coordinates[0]],
        preset: point.options.preset,
        name: point.properties.iconCaption,

    }
})
