export const loadState = () => {
    try {
        const loadingState = localStorage.getItem("todo")
        if(loadingState === null) {
            return undefined;
        }
        return JSON.parse(loadingState);
    }
     catch(err) {
         return undefined;
     }
}


export const saveState = (state) => {
    try {
        const savingState =JSON.stringify(state);
        localStorage.setItem("todo",savingState);
    }catch(err) {
        console.log(err)
    }

}