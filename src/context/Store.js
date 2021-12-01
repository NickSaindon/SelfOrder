import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { initialState } from './initialState';

export const Store = createContext();



export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}