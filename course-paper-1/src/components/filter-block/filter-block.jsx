import { Checkbox } from "./checkbox";
import { Button } from "./button";
import { checkboxes } from "./checkboxesInfo";
import './filter-block-style.css';

export const FilterBlock = () => {
    return (
        <div className={"filter-block-wrapper"}>
            <div className={ "filter-block" }>
                {
                    checkboxes.map( (c, index) =>
                        <Checkbox
                            index={ index }
                            title={ c.title }
                            name={ c.name }
                            onChange={ ()=>{} }
                        />
                    )
                }
            </div>
           <Button className={ "filter-block__button" } name={ "Применить" }  onClick={ ()=>{} }/>
        </div>
    )
}