import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {motion} from "framer-motion"

import {getPageWithGenre,getGenresList} from "../store";
import {MovieListCard} from "../components";


const MovieList = () => {
    const {genresList: {genres}} = useSelector(state => state["genresReducer"]);
    const {page: {results, page}, genre} = useSelector(state => state["pageReducer"]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenresList())
        dispatch(getPageWithGenre([genre,1]))
    }, [])

    const goToNextPage = (p) => {
        if(p<500) dispatch(getPageWithGenre([genre, p+1]))
        else dispatch(getPageWithGenre([genre,1]))
    }

    const goToPrevPage = (p) => {
        if(p>1) dispatch(getPageWithGenre([genre,p-1]))
        else dispatch(getPageWithGenre([genre,500]))
    }

    return (
        <div className="movieListComponent">
            <div className="nextPrevDiv">
                <button className="prevButton" onClick={() => goToPrevPage(page)}>&larr;</button>
                <button className="nextButton" onClick={() => goToNextPage(page)}>&rarr;</button>
            </div>
            <motion.div className={"movieList"} initial={{y:100}} animate={{y:0}} transition={{type:"spring", ease:"easeIn", duration:1}}>
                {results && results.map(movie => <MovieListCard key={movie.id} movie={movie} genres={genres}/>)}
            </motion.div>
        </div>
    );
};

export {MovieList};