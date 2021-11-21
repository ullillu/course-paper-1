import React from 'react';
import { Link } from 'react-router-dom';
import './district-page-style.css';

const District = ( props ) => {
    return (
        <div className={ "district-page" }>
            <aside className={ "district-page__nav__wrapper" }>
                <nav className={ "district-page__nav" }>
                    <Link to="/" className={ "district-page__link" } >Карта районов Краснодара</Link>
                    <span>  /  { props.title }</span>
                </nav>
            </aside>
            <main className={ "district-page__main" }>
                <section className={ "district-page__main__text" }>
                    <header>
                        <h1>Район { props.title }</h1>
                    </header>
                    <section className={ "district-page__description" }>
                        <p>
                            { props.description }
                        </p>
                        <p>
                            <b>Плюсы</b>: { props.pros }
                        </p>
                        <p>
                            <b>Минусы</b>: { props.cons }
                        </p>
                    </section>
                </section>
                <section className={ "district-page__main__images" }>
                    {
                        props.images !== undefined &&
                        props.images.map( (img) => {
                            return (
                                <img src={ img }
                                     alt={ props.title }
                                     height={ 200 }
                                />
                            )})
                    }
                </section>
            </main>
        </div>
    );
};

export default District;