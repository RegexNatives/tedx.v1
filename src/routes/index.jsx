import React from "react";
import {
    Route,
    Routes,
    useLocation,
    useNavigate,
    Navigate,
  } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {routesData} from '../constants/routes'

export default function Navigation(){
    return(
        <Routes>
            {/* <ToastContainer /> */}
            {routesData.map((route, index) => (
                <Route key={index} path={route.path} element={<route.Component />} />
            ))}
        </Routes>
    )
}