import React from 'react'

const Country = ({ country, select }) => {

  return (
    <div key={country.name}>
      {country.name} <button onClick={() => select(country)}>show</button>
    </div> 
  );
}

export default Country;
