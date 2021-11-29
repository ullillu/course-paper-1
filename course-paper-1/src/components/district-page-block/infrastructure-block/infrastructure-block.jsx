import React from 'react';

import './infrastructure-block-style.css';

const InfrastructureBlock = ( props ) => {
    return (
        <div className={ "infrastructure-block" }>
            <header>
                <h1 className={ "title" }>
                    Инфраструктура
                </h1>
            </header>
            <section>
                <p className={ "description" }>
                    { props.infrastructure }
                </p>
            </section>
        </div>
    );
};

export default InfrastructureBlock;