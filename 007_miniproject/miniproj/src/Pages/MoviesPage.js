import React from "react";

import {MovieList} from "../components";

const MoviesPage = () => {
    return (
        <section className="SectionUnderHeader">
            <div className="w75">
                <MovieList />
            </div>
        </section>
    );
};

export {MoviesPage};