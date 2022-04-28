import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion"

import {UserInfo} from "./UserInfo";
import ava from "../img/ava.png";

const Header = ({toggleTheme, theme}) => {
    const [clickedState , setClickedState] = useState(false)
    const scrollToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <section className="sectionHeader">
            <div className="w75">
                <header>
                    <div className="headerLeft">
                        <NavLink to={"/"}>J4Xmovie</NavLink>
                    </div>
                    <div className="headerRight">
                        <ul>
                            <motion.li
                                initial={{x:-75,opacity:0}}
                                animate={{x:0,opacity:1}}
                                transition={{duration:1.6,delay:0.6}}
                            >
                                <NavLink onClick={scrollToTop} to={"/"}>Home</NavLink>
                            </motion.li>
                            <motion.li
                                initial={{x:-50,opacity:0}}
                                animate={{x:0,opacity:1}}
                                transition={{duration:1.3,delay:0.3}}
                            >
                                <NavLink onClick={scrollToTop} to={"movies"}>Movies</NavLink>
                            </motion.li>
                            <motion.li
                                initial={{x:-25,opacity:0}}
                                animate={{x:0,opacity:1}}
                                transition={{duration:1,delay:0}}
                            >
                                <NavLink onClick={scrollToTop} to={"genres"}>Genres</NavLink>
                            </motion.li>
                            <li>
                                <div className="switchContainer" onClick={toggleTheme}>
                                    <div className={`switchItSelf ${theme === "light" ? "rSwitch" : ""}`}/>
                                </div>
                            </li>
                            <li>
                                <div className="avaDiv60">
                                    <img src={ava} alt="ava" />
                                    <UserInfo />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div
                         onClick={() => {setClickedState(!clickedState)}}
                         className={clickedState ? "headerRightMobile mobClicked" : "headerRightMobile"}
                    >
                        <div><span/></div>
                        <ul className="ulInMobile">
                            <li>
                                <div className="switchContainer" onClick={toggleTheme}>
                                    <div className={`switchItSelf ${theme === "light" ? "rSwitch" : ""}`}/>
                                </div>
                            </li>
                            <li><NavLink className={"blackText"} onClick={scrollToTop} to={"/"}>Home</NavLink></li>
                            <li><NavLink className={"blackText"} onClick={scrollToTop} to={"movies"}>Movies</NavLink></li>
                            <li><NavLink className={"blackText"} onClick={scrollToTop} to={"genres"}>Genres</NavLink></li>
                        </ul>
                    </div>
                </header>
            </div>
            <span id="toTop" />
        </section>
    );
};

export {Header};