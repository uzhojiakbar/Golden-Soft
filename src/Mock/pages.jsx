import Main from "../Pages/Main";

export const pages = [
    {
        id: 1,
        name: 'Главная',
        path: 'main',
        child: [],
        element:<Main/>
    },
    {
        id: 2,
        name: 'Каталог',
        path: 'catalog',
        child: [],
        element: <h1>Каталог</h1>
    },
    {
        id: 3,
        name: 'Оптовая продажа',
        path: 'prodaja',
        child: [],
        element: <h1>Оптовая</h1>
    },
    {
        id: 4,
        name: 'О нас',
        path: 'o-nac',
        child: [],
        element: <h1>O nac</h1>
    },
]