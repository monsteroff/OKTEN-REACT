import React from "react";
import {Header, ScrollToTop} from "../components";
import {Outlet} from "react-router-dom";

const DaddyOfPages = ({toggleTheme, theme}) => {
    return (
        <div>
            <Header toggleTheme={toggleTheme} theme={theme}/>
            <Outlet/>
            <ScrollToTop />
        </div>
    );
};

export {DaddyOfPages} ;