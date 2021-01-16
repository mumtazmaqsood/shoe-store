

import {createContext, useReducer} from 'react';
import {AppReducer} from './AppReducer';


const initialState =  {
    items: []
}


export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

        /* function addItem(item){
            dispatch({
                type: 'ADD_ITEM',
                payload: item
            });
        } */ 

        function delItem(id){
            dispatch({
                type: 'deleteItem',
                payload:id
            })
        }

    return(
        <GlobalContext.Provider value={
            {items: state.items,
                /* addItem */
             dispatch: dispatch,
             delItem   
            }  
        }>
        {children}

        </GlobalContext.Provider>
    );
}