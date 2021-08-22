import {
  GET_GLOBAL_DATA,
  GET_GLOBAL_HISTORY_DATA,
  GET_COUNTRIES_DATA,
  GET_COUNTRY_HISTORICAL_DATA,
  GET_COUNTRY_DATA,
  GlobalType,
  GlobalHistoryType,
  CountryDataType,
  SET_FILTER_VALUE,
  SET_LOADING,
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
    }
  | {
      type: typeof GET_COUNTRY_HISTORICAL_DATA;
      payload: GlobalHistoryType | null;
    }
  | {
      type: typeof GET_COUNTRY_DATA;
      payload: GlobalType | null;
    }
  | {
      type: typeof SET_LOADING;
    };

const GlobalReducer = (state: State, action: action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_GLOBAL_DATA:
      return {
        ...state,
        global: action.payload,
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
    case GET_COUNTRY_DATA:
      return {
        ...state,
        countryData: action.payload,
      };
    case GET_COUNTRY_HISTORICAL_DATA:
      return {
        ...state,
        countryHistory: action.payload,
        loading: false,
      };
    case SET_FILTER_VALUE:
      return {
        ...state,
        countriesFiltered: state.countriesData.filter((data) => {
          return (
            data.country.toLowerCase().indexOf(action.payload.toLowerCase()) >
            -1
          );
        }),
        loading: false,
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
