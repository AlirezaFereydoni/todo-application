

const initialState = [
    {
        id:null,
        text:"",
        completed:false
    }
]
    



const reducer = (state = initialState,action) => {
    switch(action.type) {
        case "ADD_ITEM": return [
            ...state,
            {
                id:state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                text :action.text,
                completed:false

            }
        ]

        case "DELETE_ITEM": return [
            state.filter(item => item.id !== action.id)
        ]
        
        default: return state
        
    }
}

export default reducer;