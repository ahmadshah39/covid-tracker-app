import { createContext, useReducer, useContext } from "react";
import {
  fetchGlobalData,
  fetchHistoricalGlobalData,
  fetchCountriesData,
  fetchCountryData,
  fetchCountryHistoricalData,
} from "../api/api";
import GlobalReducer from "./GlobalReducer";
import {
  CountryDataType,
  GET_GLOBAL_DATA,
  GET_COUNTRIES_DATA,
  GET_GLOBAL_HISTORY_DATA,
  GET_COUNTRY_HISTORICAL_DATA,
  GET_COUNTRY_DATA,
  SET_FILTER_VALUE,
  CLEAR_FILTER,
  GlobalHistoryType,
  GlobalType,
  SET_LOADING,
} from "./ActionTypes";
// Types

export type State = {
  global: GlobalType | null;
  globalHistory: GlobalHistoryType | null;
  countryHistory: GlobalHistoryType | null;
  countriesData: CountryDataType[] | [];
  countryData: GlobalType | null;
  countriesFiltered: CountryDataType[] | [];
  loading: boolean;
};

export interface IGlobalContextPorps {
  global: GlobalType | null;
  globalHistory: GlobalHistoryType | null;
  countryHistory: GlobalHistoryType | null;
  countriesData: CountryDataType[] | [];
  countryData: GlobalType | null;
  loading: boolean;
  countriesFiltered: CountryDataType[] | [];
  setLoading: () => void;
  getGlobalData: () => void;
  getHistoricalGlobalData: () => void;
  getCountriesData: () => void;
  filterCountries: (value: string) => void;
  getCountryData: (value: string) => void;
  getCountryHistoricalData: (value: string) => void;
}

const initialState: State = {
  global: null,
  globalHistory: null,
  countryHistory: null,
  countriesData: [],
  countryData: null,
  loading: false,
  countriesFiltered: [],
};

export const GlobalContext = createContext<IGlobalContextPorps>(
  {} as IGlobalContextPorps
);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  //   Actions

  //   getGlobalData
  const getGlobalData = async () => {
    dispatch({
      type: GET_GLOBAL_DATA,
      payload: await fetchGlobalData(),
    });
  };
  //   getHistoricalGlobalData
  const getHistoricalGlobalData = async () => {
    dispatch({
      type: GET_GLOBAL_HISTORY_DATA,
      payload: await fetchHistoricalGlobalData(),
    });
  };
  //   getCountriesData
  const getCountriesData = async () => {
    dispatch({
      type: GET_COUNTRIES_DATA,
      payload: await fetchCountriesData(),
    });
  };
  // getCountryData
  const getCountryData = async (value: string) => {
    dispatch({
      type: GET_COUNTRY_DATA,
      payload: await fetchCountryData(value),
    });
  };
  // getCountryHistoricalData
  const getCountryHistoricalData = async (value: string) => {
    const res = await fetchCountryHistoricalData(value);
    if (!res.message) {
      dispatch({
        type: GET_COUNTRY_HISTORICAL_DATA,
        payload: res,
      });
      return;
    }
    dispatch({
      type: GET_COUNTRY_HISTORICAL_DATA,
      payload: null,
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
  // SetLoading

  const setLoading = () => dispatch({ type: SET_LOADING });

  // Destructuring state
  const {
    global,
    loading,
    globalHistory,
    countriesData,
    countriesFiltered,
    countryData,
    countryHistory,
  } = state;
  // return Provider
  return (
    <GlobalContext.Provider
      value={{
        loading,
        global,
        globalHistory,
        countriesData,
        countriesFiltered,
        countryData,
        countryHistory,
        setLoading,
        getGlobalData,
        getHistoricalGlobalData,
        getCountriesData,
        filterCountries,
        getCountryHistoricalData,
        getCountryData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
