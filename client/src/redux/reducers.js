import { ADD_CURRENT_USER, GET_CURRENT_USER } from './counter.types';


    const INITIAL_STATE = {

        currentUser: undefined,
    };

    const reducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {

            case ADD_CURRENT_USER:

               return {

                 ...state, currentUser: action.currentUser,

               };

            case GET_CURRENT_USER:

               return {
                  ...state, currentUser: action.currentUser,

               };

             default: return state;

        }

    };

    export default reducer;
