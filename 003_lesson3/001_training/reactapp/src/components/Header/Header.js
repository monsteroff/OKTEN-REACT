import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import css from "./Header.module.css";
import {useAuth} from "../../hooks/useAuth";

const Header = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()
    const logout = () => {
        logOut(()=>navigate('/',{replace:true}))
    }

    return (
        <>
            <div className={css.header}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <button onClick={logout}>Logout</button>
            </div>
        </>
    );
};

export default Header;