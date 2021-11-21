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
                    <p>
                        Выберите интересующие вас категории в фильтре слева.
                    </p>
                </div>
                <div className={ "how-to-use-block__step" }>
                    <div className={ "how-to-use-block__step__number" } >
                        2
                    </div>
                    <p>
                        Тепловая карта подскажет, какие районы больше подходят под ваши параметры -
                        <br/>чем зеленее цвет, тем больше условий удовлетворено.
                    </p>
                </div>
                <div className={ "how-to-use-block__step" }>
                    <div className={ "how-to-use-block__step__number" } >
                        3
                    </div>
                    <p>
                        Нажмите на понравившийся район, чтобы перейти на страницу его описания.
                    </p>
                </div>
            </section>
        </section>
    );
};

export default HowToUseBlock;