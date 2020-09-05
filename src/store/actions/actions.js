import * as actionTypes from "./actionTypes";

export const addItem = (text) => {
    return {
        type:actionTypes.ADD_ITEM,
        text:text
    }
}


export const removeItem = (id) => {
    return {
        type:actionTypes.REMOVE_ITEM,
        id:id
    }
}

export const completeItem = (id) => {
    return {
        type:actionTypes.COMPLETE_ITEM,
        id:id
    }
}