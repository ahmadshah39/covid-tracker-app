import {
    GET_GLOBAL_DATA
  } from "./ActionTypes";
  import { State } from "./GlobalState";
  
  // types
  type action =
    | {
        type: typeof GET_GLOBAL_DATA;
        payload: SearchLocationData | null;
      }
    
  
  const GlobalReducer = (state: State, action: action) => {
    switch (action.type) {
  
      default:
        throw new Error("Bad action");
    }
  };
  export default GlobalReducer;
  