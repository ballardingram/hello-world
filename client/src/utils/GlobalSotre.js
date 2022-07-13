import React, { createContext, useContext } from 'react';
import  {useStoreReducer} from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&'+Date.now());
  
  const [state, dispatch] = useStoreReducer();
  console.log(state);
  return <Provider value={[state, dispatch]} {...props}/> ;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };