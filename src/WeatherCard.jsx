import React from 'react'

const WeatherCard = ({region, currentConditions, next_days}) => {
  
  let display;

  if (region) {
    let {dayhour, temp, precip, humidity, wind, iconURL, comment} = currentConditions;
    display =
    <div className='container'>
        <div className="current-conditions" id={comment}>
          <h1>{region}</h1>
          <h2>Current Conditions</h2>
          <h4>{dayhour}</h4><img src={iconURL} alt={comment} width='110' height='110' />
          <h4>{comment}</h4>
          <div className='details'>
            <h4>Temperature (ºF): {temp.f}</h4>
            <h4>Precipitation: {precip}</h4>
            <h4>Humidity: {humidity}</h4>
            <h4>Wind (MPH): {wind.mile}</h4>
          </div>
        </div>
        <div className="next-days">
          {
            next_days.map((x, y) => {
              let {day, comment, max_temp, min_temp,  iconURL} = x;
              return (
              <div key={y} className='days'>
                <h4>{day}</h4>
                <img src={iconURL} alt={comment} />
                <p>{comment}</p>
                <p>High (ºF): {max_temp.f}</p>
                <p>Low (ºF): {min_temp.f}</p>
              </div>)
            })
          }
        </div>
    </div>
  } else {
    display = <div className='message'>No weather data found for your location! Check search paramaters and try again.</div>
  }
  return (
    <>{display}</>
  )
}

export default WeatherCard