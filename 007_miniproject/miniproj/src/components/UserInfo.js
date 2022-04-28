import React from "react";
import ava from "../img/ava.png";

const UserInfo = () => {
    return (
        <div className="userInfo">
            <span>Cahangir Ganizade</span>
            <img src={ava} alt="ava" />
        </div>
    );
};

export {UserInfo};