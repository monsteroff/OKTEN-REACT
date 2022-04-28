import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../sevices";

const initialState = {
    movie: {}
}

export const getMovie = createAsyncThunk(
    "moviesSlice/getMovie",
    async (movieId, {dispatch}) => {
        dispatch(setMovie(await moviesService.getMovieById(movieId)))
    }
)

const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.movie = action.payload
        }
    }
})

const moviesReducer = moviesSlice.reducer;
export const {setMovie} = moviesSlice.actions;
export default moviesReducer;