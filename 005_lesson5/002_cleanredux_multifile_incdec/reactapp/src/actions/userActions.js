import * as actionTypes from "./actionTypes"

export const inc = (num) => {
    return {
        type : actionTypes.INCREMENT_NUMBER,
        payload : num
    }
}

export const dec = (num) => {
    return {
        type : actionTypes.DECREMENT_NUMBER,
        payload : num
    }
}