import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <NavLink to="/users">users</NavLink>
                </li>
                <li>
                    <NavLink to="/posts">posts</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;