import * as actionTypes from "../actions/actionTypes"

export default function numberReducer(state = 0, action){
    switch (action.type){
        case actionTypes.INCREMENT_NUMBER:
            return state + action.payload
        case actionTypes.DECREMENT_NUMBER:
            return state - action.payload

        default:
            return state
    }
}