import React, { Fragment } from 'react'
import useWeather from '../hooks/useWeather'
import Form from '../Form/Form'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import Forecast from '../Forecast/Forecast'
import './Homepage.module.css'
import WeatherCard from '../Card/WeatherCard'


const Homepage = () => {
  const { error, loading, weather, submitRequest } = useWeather();
  const onSubmit = (value) => {
      submitRequest(value);
  }
  return (
    <Fragment>
      {!weather && (
      <div className={'box'}>
        <Form submitSearch={onSubmit} />
        </div>
    
        )}
      {weather && <WeatherCard weather ={weather}/>}
    </Fragment>
  )
}
export default Homepage
 