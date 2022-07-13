import { useReducer } from "react";
import { ADD_USER } from "./actions";
export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_USER:{
            return {...state, user: { 
                token: action.token,
                currentUser: action.currentUser
               
            }};
        }
    default: 
      return state;
    }
}

export function useStoreReducer(initialState) {
    return useReducer(reducer, initialState)
  }