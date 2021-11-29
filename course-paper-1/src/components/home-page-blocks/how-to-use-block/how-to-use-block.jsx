import React from 'react';

import './how-to-use-block-style.css';

const HowToUseBlock = () => {
    return (
        <section id={ "how-to" } className={ "how-to-use-block" }>
            <header>
                <h1 className={ "how-to-use-block__title" }>
                    Как пользоваться?
                </h1>
            </header>
            <section className={ "how-to-use-block__steps" }>
                <div className={ "how-to-use-block__step" }>
                    <div className={ "how-to-use-block__step__number" } >
                        1
                    </div>
                    <h2>выберите категории</h2>
                    <p>
                        В фильтре слева представлены наиболее востребованные категории.
                    </p>
                </div>
                <div className={ "how-to-use-block__step" }>
                    <div className={ "how-to-use-block__step__line" }></div>
                </div>
                <div className={ "how-to-use-block__step" }>
                    <div className={ "how-to-use-block__step__number" } >
                        2
                    </div>
                    <h2>выберите район</h2>
                    <p>
                        Чем зеленее цвет на тепловой карте, тем более подходящий район.
                    </p>
                </div>
                <div className={ "how-to-use-block__step" }>
                    <div className={ "how-to-use-block__step__line" }></div>
                </div>
                <div className={ "how-to-use-block__step" }>
                    <div className={ "how-to-use-block__step__number" } >
                        3
                    </div>
                    <h2>нажмите на него</h2>
                    <p>
                        Так вы перейдете на страницу его описания.
                    </p>
                </div>
            </section>
        </section>
    );
};

export default HowToUseBlock;