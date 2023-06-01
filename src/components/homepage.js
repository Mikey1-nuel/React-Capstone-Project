import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './nav';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const worldCountries = useSelector((state) => state.continent);
  const filteredCountries = worldCountries.filter((country) => {
    const newVar = country.country.toLowerCase().includes(search);
    return newVar;
  });
  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="inputcont">
          <input className="search" placeholder="Search Country.." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <section className="country-container">
          {
            filteredCountries.map((item) => (
              <div key={item.id} className="countrycard">
                <Link key={item.id} to={`/country/${item.country}`} className="container">
                  <h2 className="name">{item.country}</h2>
                  <h2 className="critical">{item.critical}</h2>
                  <img src={item.countryFlag} alt="country flag" />
                  <h2>{item.id}</h2>
                </Link>
              </div>
            ))
          }
        </section>
      </div>
    </div>
  );
};

export default HomePage;
