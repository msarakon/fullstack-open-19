import React from 'react'

const CountryWeather = ({ weather }) => {

  if (Object.keys(weather).length === 0) {
    return ( <div></div> )
  }

  return (
    <div>
      <div><b>temperature:</b> {weather.temp_c} Celsius</div>
      <img src={weather.condition.icon} alt="Weather icon" title="Weather icon" />
      <div><b>wind:</b> {weather.wind_kph} kph direction {weather.wind_dir}</div>
    </div>
  );
}

export default CountryWeather;
