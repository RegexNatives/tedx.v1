import React from "react";
import {
    Route,
    Routes,
    useLocation,
    useNavigate,
    Navigate,
  } from "react-router-dom";
import Home from "../pages/Home";

export default function Navigation(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/team" element={<Home />} /> */}
            <Route path="/speakers" element={<Home />} />
        </Routes>
    )
}