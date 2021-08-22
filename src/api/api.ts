const API_URL = "https://disease.sh/v3/covid-19";
//   Actions
//   getGlobalData
export const fetchGlobalData = async () => {
  const url = `${API_URL}/all`;
  const res = await (await fetch(url)).json();
  return res;
};
//   fetchHistoricalGlobalData
export const fetchHistoricalGlobalData = async () => {
  const url = `${API_URL}/historical/all`;
  const res = await (await fetch(url)).json();
  const dates = Object.keys(res.cases);
  const cases: number[] = Object.values(res.cases);
  const deaths: number[] = Object.values(res.deaths);
  const recovered: number[] = Object.values(res.recovered);
  return { dates, cases, deaths, recovered };
};
//   fetchCountryHistoricalData
export const fetchCountryHistoricalData = async (value: string) => {
  const url = `${API_URL}/historical/${value}`;
  const res = await (await fetch(url)).json();
  if (!res.message) {
    const dates = Object.keys(res.timeline.cases);
    const cases: number[] = Object.values(res.timeline.cases);
    const deaths: number[] = Object.values(res.timeline.deaths);
    const recovered: number[] = Object.values(res.timeline.recovered);
    return { dates, cases, deaths, recovered };
  }
  return res;
};
//   fetchCountriesData
export const fetchCountriesData = async () => {
  const url = `${API_URL}/countries`;
  const res = await (await fetch(url)).json();
  return res;
};
//   fetchCountryData
export const fetchCountryData = async (value: string) => {
  const url = `${API_URL}/countries/${value}`;
  const res = await (await fetch(url)).json();
  return res;
};
