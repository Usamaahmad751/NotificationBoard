
const iState = {

    bikes: [],
    posts: []
};



const reducer = async (state = iState, action) => {
    
    if (action.type === 'HANDLE_INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }
 
    return state
  
}

export default reducer;