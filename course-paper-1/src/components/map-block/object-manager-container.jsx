import React from 'react';
import { ObjectManager } from "react-yandex-maps";

const ObjectManagerContainer = ( props ) => {
    return (
        <div className={ "object-manager-container" }>
            <ObjectManager
                options={{
                    clusterize: true,
                    gridSize: 64,
                    clusterIconLayout: 'default#pieChart'

                }}
                filter={ props.objectManagerFilter }
                features={ props.objects }
                modules={[
                    'objectManager.addon.objectsHint',
                ]}
            />
        </div>
    );
};

export default ObjectManagerContainer;