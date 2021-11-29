import React from 'react';

import './pros-cons-block.css';

const ProsConsBlock = ( props ) => {
    return (
        <div className={ "pros-cons-block" }>
            <header>
                <h1 className={ "title" }>
                    Преимущества и недостатки района
                </h1>
            </header>
            <div className={ "pros-cons-block__content" }>
                <section>
                    {
                        props.pros.map( (item, index) => {
                            return (
                                <span key={ index }>{ item }</span>
                            )
                        })
                    }
                </section>

                <section>
                    {
                        props.cons.map( (item, index) => {
                            return (
                                <span key={ index }>{ item }</span>
                            )
                        })
                    }
                </section>
            </div>
        </div>
    );
};

export default ProsConsBlock;