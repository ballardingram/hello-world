import React, {createContext, useContext} from 'react';

const UserContext = createContext();
export const useUserConext = () => useContext(UserContext);

export const UserProvider = ({children}) => {
    const user = {};
    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    );
}
