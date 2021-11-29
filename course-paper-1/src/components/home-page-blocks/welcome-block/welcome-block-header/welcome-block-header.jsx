import React from 'react';

import './welcome-block-header.css';

const WelcomeBlockHeader = () => {
    return (
        <div className={ "welcome-block-header" }>
            <div className={ "welcome-block-header__refs" }>
                <a href={ "#about-us" }>О проекте</a>
                <a href={ "#how-to" }>Как пользоваться?</a>
                <a href={ "#map" }>Карта</a>
            </div>
        </div>
    );
};

export default WelcomeBlockHeader;