import { useReducer } from "react";
import { GET_USER, ADD_USER } from "./actions";
export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_USER:{
            return [...state, { 
                token: action.token,
                currentUser: action.currentUser
               
            }];
        }
        case GET_USER:{
        const user = {...action.payload}
        return {...state,
            user : user
        };
    }
    default:
      return {...state};
    }
}

export function useStoreReducer(initialState) {
    return useReducer(reducer, initialState)
  }