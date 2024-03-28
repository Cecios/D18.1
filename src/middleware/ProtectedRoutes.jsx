import React from "react";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
const isAuthorized = () =>{
    return JSON.parse(localStorage.getItem("auth"))
}

const ProtectedRoutes = () => {

    const isUserLoggedIn = isAuthorized()
    return  isUserLoggedIn ? <Outlet/> : <LoginPage/>
}
export default ProtectedRoutes;