
import React from "react";

import { Routes, Route} from "react-router-dom";


import Home from "./home";
import About from "./about";
import Payments from "./payments";
import Plans from "./plans";
import Login from "./login/login";
import Register from "./register";

const AllRoutes = () => {
    return (
        <div>
           <Routes>

            <Route path='/' element={<Home />} > </Route>
            <Route path='/payments' element={<Payments />} > </Route>
            <Route path='/plans' element={<Plans />} > </Route>
            <Route path='/about' element={<About />} > </Route>
            <Route path='/login' element={<Login />} > </Route>
            <Route path='/register' element={<Register />} > </Route>
            
           </Routes>
        </div>
    )
}

export {AllRoutes}