
export const AppReducer = (state, action) => {
    switch(action.type){
        case 'addItem':
        return{ 
            ...state,
            items: [action.payload, ...state.items]
           }
        
        case 'deleteItem':
            return{
                ...state,
                items: state.items.filter( item => item.id !== action.payload)
            }
        default:
            return state;
    }
}