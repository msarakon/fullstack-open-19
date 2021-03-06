import React from 'react'
import Country from './country'
import CountryDetails from './country-details'

const CountryList = ({ countries, selectCountry }) => {

  if (countries.length > 10) {
    return (<div>Too many matches, specify another filter</div>)
  }

  if (countries.length === 1) {
    return <CountryDetails country={countries[0]} />
  }

  return (
    <div>
      {
        countries.map(country =>
          <Country key={country.name} country={country} select={(c) => selectCountry(c)} />
        )
      }
    </div>
  );
}

export default CountryList;
