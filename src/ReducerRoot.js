
const initState = {
    message:"welcome!"
}
const ReducerRoot = (state = initState, action) => {
    if (action.type === 'SET_UID') {
        return {
            ...state,
            uid: action.uid
        };
    }
    return state
};

export default ReducerRoot;
