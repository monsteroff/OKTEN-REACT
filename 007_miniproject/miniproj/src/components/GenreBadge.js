import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {getGenresList, getPageWithGenre} from "../store";

const GenreBadge = ({genre_id,genresOBJ}) => {
    const {genre} = useSelector(state => state["pageReducer"]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (genresOBJ === undefined){
            dispatch(getGenresList())
        }
    },[])

    const genreName = genresOBJ && genresOBJ.filter(gen => gen.id === genre_id)[0].name

    const changeGenreTo = (newGenre = "") => {
        dispatch(getPageWithGenre([newGenre,1]))
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    const buttonClass = (boolean) => boolean ? "genrePageGenreButton clickedGenreButton" : "genrePageGenreButton"

    return (
        <button className={buttonClass(genre_id === genre)} onClick={() => changeGenreTo(genre_id)}>
            <Link to={"/genres"}>{
                genreName && genreName.toUpperCase()
            }</Link>
        </button>
    );
};

export {GenreBadge};