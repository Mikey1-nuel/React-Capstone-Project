import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchCovidDataByCountry } from '../redux/country/countrySlice';
import Header from './nav';

const DetailsPage = () => {
  const { name } = useParams();
  const [state, setState] = useState(null);
  useEffect(() => {
    const getDetails = async () => {
      const countryDetails = await fetchCovidDataByCountry(name);
      setState(countryDetails);
    };
    getDetails();
  }, [name]);

  return (
    <div>
      {
        state ? (
          <div className="detail-container">
            <Header />
            <div className="imgcont">
              <img src={state.countryInfo.flag} alt="country flag" className="img" />
            </div>
            <div className="detail-container3">
              <h2 className="name">
                <span>Country:&nbsp;&nbsp; </span>
                {state.country}
              </h2>
              <h2 className="name">
                <span>Continent:&nbsp;&nbsp; </span>
                {state.continent.toLocaleString()}
              </h2>
              <h2 className="name">
                <span>Population:&nbsp;&nbsp; </span>
                {state.population.toLocaleString()}
              </h2>
              <h2 className="name">
                <span>Cases:&nbsp;&nbsp; </span>
                {state.cases.toLocaleString()}
              </h2>
              <h2 className="name">
                <span>Today&apos;s Cases:&nbsp;&nbsp; </span>
                {state.todayCases.toLocaleString()}
              </h2>
              <h2 className="name">
                <span>Deaths:&nbsp;&nbsp; </span>
                {state.deaths.toLocaleString()}
              </h2>
              <h2 className="name">
                <span>Today&apos;s Deaths:&nbsp;&nbsp; </span>
                {state.todayDeaths.toLocaleString()}
              </h2>
              <h2 className="name">
                <span>Recovered:&nbsp;&nbsp; </span>
                {state.recovered.toLocaleString()}
              </h2>
              <h2 className="name">
                <span>Active:&nbsp;&nbsp; </span>
                {state.active.toLocaleString()}
              </h2>
              <h2 className="name">
                <span>Tests:&nbsp;&nbsp; </span>
                {state.tests.toLocaleString()}
              </h2>
              <h2 className="name">
                <span>Cases Per One Million:&nbsp;&nbsp; </span>
                {state.casesPerOneMillion.toLocaleString()}
              </h2>
              <h2 className="name">
                <span>Deaths Per One Million:&nbsp;&nbsp; </span>
                {state.deathsPerOneMillion.toLocaleString()}
              </h2>
              <h2>{}</h2>
            </div>
          </div>
        ) : (
          <div>Loading</div>
        )
      }
    </div>
  );
};

export default DetailsPage;
