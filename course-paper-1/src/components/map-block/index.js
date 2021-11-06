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
        },
        height:  800,
        width: '100%',
        modules: [
                'templateLayoutFactory',
                'layout.PieChart'
        ]
};

