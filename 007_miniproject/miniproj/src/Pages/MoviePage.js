import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getMovie} from "../store";
import {MovieInfo} from "../components";

const MoviePage = () => {
    const {movie} = useSelector(state => state["moviesReducer"])

    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovie(params.movieId))
    },[])

    return (
        <section className="SectionUnderHeader">
            <div className="w75">
                <MovieInfo movie={movie}/>
            </div>
        </section>
    );
};

export {MoviePage};