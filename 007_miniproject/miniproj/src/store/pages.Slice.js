import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pagesService} from "../sevices";

const initialState = {
    genre: "",
    page: {},
    state: null,
    error: null,
}

export const getPageWithGenre = createAsyncThunk(
    "pageSlice/getPageWithGenre",
    async ([genre,page], {dispatch}) => {
        dispatch(setGenre(genre))
        dispatch(setPage(await  pagesService.getPageByNumberWithGenre(genre,page)))
    }
)

const pageSlice = createSlice({
    name: "pageSlice",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        setGenre: (state, action) => {
            state.genre = action.payload
        }
    }
})

const pageReducer = pageSlice.reducer;
export const {setPage, setGenre} = pageSlice.actions;
export default pageReducer;