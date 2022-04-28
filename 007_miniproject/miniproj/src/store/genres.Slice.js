import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../sevices";

const initialState = {
    genresList: {}
}

export const getGenresList = createAsyncThunk(
    "genresSlice/getGenresList",
    async (_, {dispatch}) => {
        dispatch(setGenresList(await genresService.getAllGenres()))
    }
)

const genresSlice = createSlice({
    name: "genresSlice",
    initialState,
    reducers: {
        setGenresList: (state, action) => {
            state.genresList = action.payload
        }
    }
})

const genresReducer = genresSlice.reducer;
export const {setGenresList} = genresSlice.actions;
export default genresReducer;