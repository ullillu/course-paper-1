import React from 'react';

import image_1 from './image_1.jpeg'
import image_2 from './image_2.jpeg'
import image_3 from './image_3.jpeg'
import image_4 from './image_4.jpeg'

import './about-us-block-style.css'

const AboutUsBlock = () => {
    return (
        <section id={ "about-us" } className={ "about-us-block" }>
            <div className={ "about-us-block__text" }>
                <header>
                    <h1 className={ "about-us-block__text__title" }>
                        О проекте
                    </h1>
                    <p className={ "about-us-block__text__description" }>
                        Карта была разработана специально для желающих переехать в Краснодар.
                        В ней были учтены наиболее востребованные категории инфраструктуры города.
                        Благодаря ей Вы сможете узнать плюсы и минусы районов
                        и понять, какой Вам подходит больше всего.
                    </p>
                </header>
            </div>
            <div className={ "about-us-block__images" }>
                <div className={ "about-us-block__images__row" }>
                    <img
                        src={ image_1 }
                        alt={ 'Krasnodar' }
                        width={ '200px' }
                        height={ '200px' }
                    />
                    <img
                        src={ image_2 }
                        alt={ 'Krasnodar' }
                        width={ '200px' }
                        height={ '200px' }
                    />
                </div>
               <div className={ "about-us-block__images__row" }>
                   <img
                       src={ image_3 }
                       alt={ 'Krasnodar' }
                       width={ '200px' }
                       height={ '200px' }
                   />
                   <img
                       src={ image_4 }
                       alt={ 'Krasnodar' }
                       width={ '200px' }
                       height={ '200px' }
                   />
               </div>
            </div>
        </section>
    );
};

export default AboutUsBlock;