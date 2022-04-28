import React from 'react';
import {Navigate, useLocation} from "react-router-dom"

import {useAuth} from "../hooks/useAuth";
// Note : esli kakuyu libo komponentu otkrivat dvoynimi teqami to u neqo sushestvuet propsa pod nazvaniem children

const RequireAuth = ({children}) => {
    const {user} = useAuth()
    const location = useLocation();

    if(!user){
        return <Navigate to={"/login"} state={location} />
    }

    return children;
};

export default RequireAuth;