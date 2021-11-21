import parks from './icons/parks.svg';
import preschools from './icons/preschools.svg';
import theatres from './icons/theatres.svg';
import schools from './icons/schools.svg';
import sport_grounds from './icons/sport-grounds.svg';
import trks from './icons/trk.svg';

export const filterIcons = [preschools, parks, theatres, schools, sport_grounds, trks]

export const filterInfo = {
        "Детский сад": true,
        "Парк": true,
        "Театр": true,
        "Школа": true,
        "Спорт. площадка": true,
        "Торговый центр": true,
};
export const mapProps = {
        defaultState: {
                center: [45.06, 39.02],
                zoom: 12
                // behaviors: ["disable('scrollZoom')", "drag", "dblClickZoom", "rightMouseButtonMagnifier"]
        },
        height:  '70vh',
        width: '90vw',
        modules: [
                'templateLayoutFactory',
                'layout.PieChart'
        ]
};

