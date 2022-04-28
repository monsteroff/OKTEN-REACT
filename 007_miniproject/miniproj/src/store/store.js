import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./movies.Slice";
import genresReducer from "./genres.Slice";
import pageReducer from "./pages.Slice";

const store = configureStore({reducer: {moviesReducer, genresReducer, pageReducer}});

export default store;