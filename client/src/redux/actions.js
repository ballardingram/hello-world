import { ADD_CURRENT_USER, GET_CURRENT_USER } from './counter.types';


export const addCurrentUser = () => {

    return {

        type: ADD_CURRENT_USER,

    };

};

export const getCurrentUer = () => {

    return {

       type: GET_CURRENT_USER,

    };

};