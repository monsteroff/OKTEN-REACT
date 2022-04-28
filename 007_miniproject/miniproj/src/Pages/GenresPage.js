import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getPageWithGenre,getGenresList} from "../store";
import {GenreBadge, MovieList} from "../components";

const GenresPage = () => {
    const {genresList: {genres}} = useSelector(state => state["genresReducer"]);
    const {genre} = useSelector(state => state["pageReducer"]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenresList())
        dispatch(getPageWithGenre([genre,1]))
    }, [])

    return (
        <section className="SectionUnderHeader">
            <div className="w75">
                <div className="gerePageButtonsDiv">
                    {genres && genres.map(gen => <GenreBadge key={gen.id} genre_id={gen.id} genresOBJ={genres}/>)}
                </div>
                <MovieList />
            </div>
        </section>
    );
};

export {GenresPage};