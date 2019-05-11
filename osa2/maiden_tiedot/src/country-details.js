import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryWeather from './country-weather'

const CountryDetails = ({ country }) => {
  const [ weather, setWeather ] = useState({})

  useEffect(() => {
    const key = '516d66fac8774d4cb38102953191105'
    const uri = encodeURI('http://api.apixu.com/v1/current.json?key=' + key + '&q=' + country.capital)
    axios.get(uri).then(response => setWeather(response.data.current))
  }, [country])

  return (
    <div>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h2>languages</h2>
      <ul>
        {
          country.languages.map(language =>
            <li key={language.iso639_1}>{language.name}</li>
          )
        }
      </ul>
      <img src={country.flag} alt="Flag" title="Flag" height="100px" />
      <h2>Weather in {country.capital}</h2>
      <CountryWeather weather={weather} />
    </div>
  );
}

export default CountryDetails;
