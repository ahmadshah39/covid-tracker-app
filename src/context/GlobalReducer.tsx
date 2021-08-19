import {
  GET_GLOBAL_DATA,
  GET_GLOBAL_HISTORY_DATA,
  GET_COUNTRIES_DATA,
  GlobalType,
  GlobalHistoryType,
  CountryDataType,
  SET_FILTER_VALUE,
  CLEAR_FILTER,
} from "./ActionTypes";
import { State } from "./GlobalState";
// types
type action =
  | {
      type: typeof GET_GLOBAL_DATA;
      payload: GlobalType | null;
    }
  | {
      type: typeof GET_GLOBAL_HISTORY_DATA;
      payload: GlobalHistoryType | null;
    }
  | {
      type: typeof GET_COUNTRIES_DATA;
      payload: CountryDataType[] | [];
    }
  | {
      type: typeof SET_FILTER_VALUE;
      payload: string;
    }
  | {
      type: typeof CLEAR_FILTER;
    };

const GlobalReducer = (state: State, action: action) => {
  switch (action.type) {
    case GET_GLOBAL_DATA:
      return {
        ...state,
        global: action.payload,
        loading: false,
      };
    case GET_GLOBAL_HISTORY_DATA:
      return {
        ...state,
        globalHistory: action.payload,
        loading: false,
      };
    case GET_COUNTRIES_DATA:
      return {
        ...state,
        countriesData: action.payload,
        loading: false,
      };
    case SET_FILTER_VALUE:
      return {
        ...state,
        countriesFiltered: state.countriesData.filter((data) => {
          // const regex = new RegExp(`${action.payload}`, "gi");
          return (
            data.country.toLowerCase().indexOf(action.payload.toLowerCase()) >
            -1
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        countriesFiltered: [],
        loading: false,
      };
    default:
      throw new Error("Bad action");
  }
};
export default GlobalReducer;
