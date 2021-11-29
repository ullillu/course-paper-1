import React from 'react';
import { ListBox, ListBoxItem } from "react-yandex-maps";

const ListBoxContainer = ( props ) => {
    return (
        <div className={ "list-box-container" }>
            <ListBox
                data={{ content: 'Фильтр' }}
                state={{
                    expanded: true,
                }}
            >
                {
                    Object.entries(props.filter).map( ([key, value]) => {
                        return (
                            <ListBoxItem data={{ content: key }}
                                         state={{ selected: value }}
                                         onSelect={ () => props.onSelect(key) }
                                         onDeselect={ () => props.onSelect(key) }
                                         key={ key }
                            />
                        )})
                }
            </ListBox>
        </div>
    );
};

export default ListBoxContainer;