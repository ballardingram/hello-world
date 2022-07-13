import React, { createContext, useContext } from 'react';
import  {useStoreReducer} from './reducers';
const initialState = {};
const StoreContext = createContext(initialState);
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&'+Date.now());
  
  const [state, dispatch] = useStoreReducer({
        token: undefined,
        currentUser: undefined
  });
  console.log(state, Date.now());
  return <Provider value={[state, dispatch]} {...props}/> ;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };