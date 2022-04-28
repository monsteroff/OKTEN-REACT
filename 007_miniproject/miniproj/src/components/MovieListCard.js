import React from "react";
import {Link} from "react-router-dom";

import {StarsRating} from "./StarsRating";
import {GenreBadge} from "./GenreBadge";
import {PosterPreview} from "./PosterPreview";
import noPoster from "../img/noposter.png";

const MovieListCard = ({movie,genres}) => {
    const {poster_path, id, original_title,release_date, vote_average, genre_ids} = movie
    const img_link = poster_path !== null ? `https://image.tmdb.org/t/p/w200${poster_path}` : noPoster

    return (
        <div className="movieListCard">
            <Link exact="true" to={`/movies/${id}`}>
                <PosterPreview poster_preview_link={img_link} alternative={original_title}/>
                <h4>{original_title}</h4>
                <p>Released: {release_date}</p>
                <p>Rating: {vote_average}/10</p>
            </Link>
            <StarsRating vote={vote_average}/>
            <div className="genresInCard">
                {genre_ids.map(genre_id => <GenreBadge key={genre_id} genre_id={genre_id} genresOBJ={genres}/>)}
            </div>
        </div>
    );
};

export {MovieListCard};