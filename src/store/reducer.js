import * as actionTypes from "./actionTypes";

const initialStore = [];
// let lastId = 0;

const reducer = (state = initialStore,action) => {
    switch(action.type) {
        case actionTypes.ITEM_ADDED: return [
            ...state,
            {
                id:action.id,
                message:action.message,
                completed:false
            }
        ]
        case actionTypes.ITEM_REMOVED: return [
            ...state.filter(item=>item.id !== action.id)
        ]
        case actionTypes.ITEM_COMPLETED: return [
            ...state.map(item => item.id === action.id ? {...item,completed:!item.completed}: item)
        ]
        case actionTypes.ITEM_EDITED: return [
            ...state.map(item => item.id === action.id ? {...item,message:action.message} : item)
        ]
        default: return state;
    }
}

export default reducer;
