import Home from "../pages/Home";
import HomeOld from "../pages/Home/index-old";
export const routesData = [
    {
        path: '/',
        name: 'home',
        Component : Home
    },
    {
        path: '/old-home',
        name: 'old',
        Component : HomeOld
    }
]