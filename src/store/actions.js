import * as actionTypes from "./actionTypes";

export const addItem = (id,text) => {
    return {
        type:actionTypes.ITEM_ADDED,
        id:id,
        message:text
    }
}

export const removeItem = (id) => {
    return {
        type:actionTypes.ITEM_REMOVED,
        id:id
    }
}

export const completeItem = (id) => {
    return {
        type:actionTypes.ITEM_COMPLETED,
        id:id,
        
    }
}


export const editItem = (id,text) => {
    return {
        type:actionTypes.ITEM_EDITED,
        id:id,
        message:text
    }
}