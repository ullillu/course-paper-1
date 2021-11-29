import React from 'react';

import './welcome-block-style.css';
import arrow from './arrow-down.svg'
import WelcomeBlockHeader from "./welcome-block-header/welcome-block-header";

const WelcomeBlock = () => {
    return (
        <main className={ "welcome-block" }>
            <WelcomeBlockHeader/>
            <header>
                <h1 className={ "welcome-block__title" }>
                    Карта районов Краснодара
                </h1>
                <p className={ "welcome-block__description" }>
                    Выберите подходящий район города для проживания согласно Вашим требованиям.
                </p>
            </header>
            <div className={ "welcome-block__arrow-wrapper" }>
                <img src={ arrow }
                     width={ '100%' }
                     height={ '40px' }
                     alt={ "arrow" }
                />
            </div>
        </main>
    );
};

export default WelcomeBlock;