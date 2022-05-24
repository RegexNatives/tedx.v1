import Home from "../pages/Home";
import GetPasses from "../pages/Passes";
export const routesData = [
    {
        path: '/',
        name: 'home',
        Component : Home
    },
    {
        path: '/book-passes',
        name: 'getPasses',
        Component : GetPasses
    }
]
