import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

export const inc = (num) => {
    return {
        type: "INC",
        payload:num
    }
}

export const dec = (num) => {
    return {
        type: "DEC",
        payload:num
    }
}

const numberReducer = (state = 0, action) => {
    switch (action.type){
        case "INC":
            return state + action.payload
        case "DEC":
            return state - action.payload

        default :
            return state
    }
}

const reducers = combineReducers({
    numberReducer
})

const reduxXx = () => {
    return createStore(reducers, applyMiddleware(thunk))
}

export default reduxXx