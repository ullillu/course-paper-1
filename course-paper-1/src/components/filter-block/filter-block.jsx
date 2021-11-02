import { Checkbox } from "./checkbox";
import { Button } from "./button";
import './filter-block-style.css';

export const FilterBlock = ({ filter, onChange }) => {
    return (
        <div className={"filter-block-wrapper"}>
            <div className={ "filter-block" }>
                {
                    filter.map( (checkbox, index) =>
                        <Checkbox
                            key={ index }
                            title={ checkbox.title }
                            name={ checkbox.name }
                            value={ checkbox.isShown }
                            onChange={ onChange }
                        />
                    )
                }
            </div>
           <Button style={ "filter-block__button" } name={ "Применить" } />
        </div>
    )
}