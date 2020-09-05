import * as actionTypes from "./../actions/actionTypes";

const initialState = [];
let taskId = 0;   



const reducer = (state = initialState,action) => {

    switch(action.type) {
        case actionTypes.ADD_ITEM : return [
            ...state,
            {
                id: ++taskId,
                text:action.text,
                complete:false
            }
        ]
        case actionTypes.REMOVE_ITEM: return [
            ...state.filter(item=>item.id!== action.id)
        ]
        case actionTypes.COMPLETE_ITEM: return [
            ...state.map(item=> {
               return item.id === action.id ? item.complete=!item.complete : null
            })
        ]
        default : return state
    }



    }

export default reducer;