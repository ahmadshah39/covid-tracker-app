// Action types
export const GET_GLOBAL_DATA = "GET_GLOBAL_DATA";
export const GET_GLOBAL_HISTORY_DATA = "GET_GLOBAL_HISTORY_DATA";
export const GET_COUNTRIES_DATA = "GET_COUNTRIES_DATA";
export const GET_COUNTRY_DATA = "GET_COUNTRY_DATA";
export const GET_COUNTRY_HISTORICAL_DATA = "GET_COUNTRY_HISTORICAL_DATA";
export const SET_FILTER_VALUE = "SET_FILTER_VALUE";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const SET_LOADING = "SET_LOADING";

// Data Types

export type GlobalType = {
  updated: number;
  country?: string;
  cases: number;
  todayCases: number;
  deaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
};

export type GlobalHistoryType = {
  dates: string[];
  cases: number[];
  deaths: number[];
  recovered: number[];
};

export type CountryDataType = {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
};
