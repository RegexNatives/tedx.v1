import React from "react";
import {
    Route,
    Routes,
    useLocation,
    useNavigate,
    Navigate,
  } from "react-router-dom";
import Home from "../pages/Home";
import {routesData} from '../constants/routes'

export default function Navigation(){
    return(
        <Routes>
            {routesData.map((route, index) => (
                <Route key={index} path={route.path} element={<route.Component />} />
            ))}
        </Routes>
    )
}