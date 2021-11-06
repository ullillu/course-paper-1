import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { App } from './pages/App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import District from "./pages/district";

const urls = {
    108: "/CHMR",
    101: "/TEC",
    104: "/HBK",
    72: "/KSK",
    69: "/KMR",
    62: "/GMR",
    76: "/PMR",
    109: "/SHMR",
    100: "/Tabachka",
    65: "/ZIP",
    58: "/40letPobedy",
    70: "/KozhZavod",
    111: "/UMR",
    99: "/SHI",
    0: "/MHG",
    107: "/CMR",
    95: "/SMR",
    103: "/FMR",
    82: "/Aviagorodok",
    68: "/KKB",
    61: "/RIP",
    110: "/Enka",
    79: "/VMR",
    75: "/NemetskayaDerevnya",
    56: "/9km",
    94: "/Severnyi",
    71: "/Gorhutor"
}


const rootElement = document.getElementById('root')
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            {
                Object.entries(urls).map( ([key, value]) => {
                    return (
                        <Route path={ value } element={ <District title={ key } /> }/>
                    )})
            }
        </Routes>
    </BrowserRouter>,
    rootElement
)