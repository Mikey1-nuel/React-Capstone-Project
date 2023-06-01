const baseUrl = 'https://disease.sh/v3/covid-19/countries';

export const getCovidData = async () => {
  const response = await fetch(baseUrl);
  const result = await response.json();
  return result;
};

export const getCovidDataByCountry = async (name) => {
  const response = await fetch(`${baseUrl}/${name}`);
  const result = await response.json();
  return result;
};

export const GET_CONTINENT = 'metrics-webapp/continent/GET_CONTINENT';
const initialState = [];

export const getContinent = () => async (dispatch) => {
  const theContinent = await getCovidData();
  const mappedData = theContinent.map(({ countryInfo: { _id: id, flag }, ...item }) => ({
    country: item.country,
    cases: item.cases,
    active: item.active,
    test: item.tests,
    population: item.population,
    countryFlag: flag,
    countryID: id,
    critical: item.critical,
  }));
  dispatch({
    type: GET_CONTINENT,
    payload: mappedData,
  });
};

const continentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENT:
      return action.payload;
    default: return state;
  }
};

export default continentReducer;
