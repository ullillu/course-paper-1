import React, {useState} from 'react';
import { filterInfo, filterIcons } from "./index";

import './map-block-style.css';


const MapLegend = () => {
    const [isShown, setIsShown] = useState(true);

    const onClick = () => {
        setIsShown(!isShown);
    }

    return (
        <div className={ "map-block__legend-wrapper" }>
            <button className={ "map-block__legend-btn" } onClick={ onClick }>
                <span className={"map-block__legend-btn__text"}>Категории</span>
                {/*<input id={ "helper" } type={ "checkbox" } className={ "map-block__legend-btn__helper" }/>*/}
                {/*<label htmlFor={"helper"} className={"map-block__legend-btn__helper-label"}>Категории</label>*/}
            </button>
            {
                isShown &&
                <div className={ "map-block__legend" }>
                    {
                        Object.entries(filterInfo).map( ([key, value], index) => {
                            return (
                                <div key={ key }  className={ "map-legend__item-wrapper" }>
                                    <img src={ filterIcons[index] } alt={ 'parks' } />
                                    <span className={ "map-legend__item-text" }>{ key }</span>
                                </div>
                            )})
                    }
                </div>
            }
        </div>
    );
};

export default MapLegend;