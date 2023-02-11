const Reducer = (state,action) =>{
    switch (action.type) {
        case "ALL_PRODUCTS":
            return{
                ...state,
                products:action.payload
            }
    
        default:
            return state;
    }
}
export default Reducer;