import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './country-list'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filterText, setFilterText ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filterCountries = (event) => setFilterText(event.target.value)

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(filterText.toLowerCase())
  )

  return (
    <div>
      <div>
        find countries <input value={filterText} onChange={filterCountries} />
      </div>
      <CountryList countries={filteredCountries} selectCountry={(c) => setFilterText(c.name)} />
    </div>
  );
}

export default App;
