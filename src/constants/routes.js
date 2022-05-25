import Home from "../pages/Home";
import Passes from "../pages/Passes";
import GetPasses from "../pages/Passes/Get-passes";
export const routesData = [
    {
        path: '/',
        name: 'home',
        Component : Home
    },
    {
        path: '/book-pass',
        name: 'Passes',
        Component : Passes
    },
    {
        path: '/pass/:_id',
        name: 'Passes',
        Component : GetPasses
    }
]
