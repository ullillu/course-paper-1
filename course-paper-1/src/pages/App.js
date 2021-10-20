import { MapBlock } from "../components/map-block/map-block";
import { FilterBlock } from "../components/filter-block/filter-block";

export const App = () => {
    return (
        <div className={ "container" }>
            <FilterBlock/>
            <MapBlock/>
        </div>
    )
};