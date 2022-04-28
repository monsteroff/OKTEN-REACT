import React from "react";
import {useSelector} from "react-redux";

import {GenreBadge} from "./GenreBadge";
import {StarsRating} from "./StarsRating";

const MovieInfo = ({movie}) => {
    const {genresList} = useSelector(state => state["genresReducer"]);
    const {backdrop_path,genres,original_title, vote_average} = movie

    return (
        <div className="SectionUnderHeader movieInfoPage">
            <div className="w75">
                <div className="movBackGround" style={backdrop_path && {
                    background:`center / cover no-repeat url("https://image.tmdb.org/t/p/original${backdrop_path}")`
                }}>
                    <div className="movCont">
                        <h1>{original_title}</h1>
                        <StarsRating vote={vote_average} />
                        <h2>AVG : {vote_average}</h2>
                        <br/>
                        <br/>
                        <h2>&nbsp;&nbsp;&nbsp;&nbsp;{movie.overview}</h2>
                        <br/>
                        <br/>
                        <h2>{movie.release_date &&
                        "Year : " + movie.release_date
                            .toString()
                            .split("")
                            .filter((herif,index) => {
                                if(index <= 3) return herif}).join("")}
                        </h2>
                        <br/>
                        <h2>{movie.production_countries && movie.production_countries.map((coun,index) => index+1 !== movie.production_countries.length ? `${coun.name} , ` : `${coun.name}`)}</h2>
                        <br/>
                        <h2>Genres : {genres && genres.map(genre => <GenreBadge
                            key={genre.id}
                            genre_id={genre.id}
                            genresOBJ={genresList.genres}
                        />)}</h2>
                        <br/>
                        <h2>{movie.runtime} minutes</h2>
                        <br/>
                        <h2><a target="_blank" href={`https://www.imdb.com/title/${movie.imdb_id}`}>IMDB LINK</a></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};