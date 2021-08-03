import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
import {
    GET_GLOBAL_DATA
} from "./ActionTypes";
// Types

export type State = {
 
};

export interface IGlobalContextPorps {

}

const initialState: State = {

};

export const GlobalContext = createContext<IGlobalContextPorps>({
  
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  //   Actions


  // return Provider
  return (
    <GlobalContext.Provider
      value={{
    
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
