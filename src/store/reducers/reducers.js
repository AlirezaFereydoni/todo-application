

const initialState = [
    {
        id:null,
        text:"",
        completed:false
    }
]
    



const reducer = (state = initialState,action) => {
    switch(action.type) {
        case "ADD_TODO": return [
            ...state,
            {
                id:state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                text :action.text,
                completed:false

            }
        ]
        
        default: return state
        
    }
}

export default reducer;