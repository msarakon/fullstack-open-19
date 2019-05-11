import React from 'react'
import CountryDetails from './country-details'

const CountryList = ({ countries }) => {

  if (countries.length > 10) {
    return (<div>Too many matches, specify another filter</div>)
  }

  if (countries.length === 1) {
    return <CountryDetails country={countries[0]} />
  }

  return (
    <div>
      {
        countries.map(country => <div key={country.name}>{country.name}</div>)
      }
    </div>
  );
}

export default CountryList;
