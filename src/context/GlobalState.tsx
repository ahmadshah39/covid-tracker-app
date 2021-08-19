import { createContext, useReducer, useContext } from "react";
import GlobalReducer from "./GlobalReducer";
import {
  CountryDataType,
  GET_GLOBAL_DATA,
  GET_COUNTRIES_DATA,
  GET_GLOBAL_HISTORY_DATA,
  SET_FILTER_VALUE,
  CLEAR_FILTER,
  GlobalHistoryType,
  GlobalType,
} from "./ActionTypes";
// Types

export type State = {
  global: GlobalType | null;
  globalHistory: GlobalHistoryType | null;
  countriesData: CountryDataType[] | [];
  countriesFiltered: CountryDataType[] | [];
  loading: boolean;
};

export interface IGlobalContextPorps {
  global: GlobalType | null;
  globalHistory: GlobalHistoryType | null;
  countriesData: CountryDataType[] | [];
  loading: boolean;
  countriesFiltered: CountryDataType[] | [];
  getGlobalData: () => void;
  getHistoricalGlobalData: () => void;
  getCountriesData: () => void;
  filterCountries: (value: string) => void;
}

const initialState: State = {
  global: null,
  globalHistory: null,
  countriesData: [],
  loading: false,
  countriesFiltered: [],
};

export const GlobalContext = createContext<IGlobalContextPorps>(
  {} as IGlobalContextPorps
);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const API_URL = "https://disease.sh/v3/covid-19";
  //   Actions
  //   getGlobalData
  const getGlobalData = async () => {
    const url = `${API_URL}/all`;
    const res = await (await fetch(url)).json();
    console.log("reder/global");

    dispatch({
      type: GET_GLOBAL_DATA,
      payload: res,
    });
  };
  //   getHistoricalGlobalData
  const getHistoricalGlobalData = async () => {
    const url = `${API_URL}/historical/all`;
    const res = await (await fetch(url)).json();
    const dates = Object.keys(res.cases);
    const cases: number[] = Object.values(res.cases);
    const deaths: number[] = Object.values(res.deaths);
    const recovered: number[] = Object.values(res.recovered);
    dispatch({
      type: GET_GLOBAL_HISTORY_DATA,
      payload: { dates, cases, deaths, recovered },
    });
  };
  //   getCountriesData
  const getCountriesData = async () => {
    const url = `${API_URL}/countries`;
    const res = await (await fetch(url)).json();
    dispatch({
      type: GET_COUNTRIES_DATA,
      payload: res,
    });
  };

  // filter Countries

  const filterCountries = (value: string) => {
    if (value === "") {
      dispatch({ type: CLEAR_FILTER });
      return;
    }
    dispatch({ type: SET_FILTER_VALUE, payload: value });
  };

  // Destructuring state
  const { global, loading, globalHistory, countriesData, countriesFiltered } =
    state;
  // return Provider
  return (
    <GlobalContext.Provider
      value={{
        loading,
        global,
        globalHistory,
        countriesData,
        countriesFiltered,
        getGlobalData,
        getHistoricalGlobalData,
        getCountriesData,
        filterCountries,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
