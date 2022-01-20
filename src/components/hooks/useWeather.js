import { useState } from 'react'
import axios from 'axios'
import getCurrentDay from '../../utilities/getCurrentDay'
import getForecastToday from '../../utilities/getForecastToday'

const BASE_URL =
  'http://api.weatherapi.com/v1/forecast.json?key=a00d7b90779a45ebb89164935221301&q='

const useWeather = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState(null)

  const getForecast = async (location) => {
    const { data } = await axios.get(`${BASE_URL}${location}`)

    if (!data || data.length === 0) {
      setError('Something went wrong')
      setLoading(false)
      return
    }
    return data;
  }

  const gatherForecastData = (data) => {
    const currentDay = getForecastToday(data.forecast.forecastday[0], data.location.name)
    setWeather({currentDay});
    setLoading(false);
  }

  const submitRequest = async (location) => {
    setLoading(true)
    setError(false)

    const response = await getForecast(location)
    console.log(response)

    if (!response) return;

    gatherForecastData(response)
  }
  return { error, loading, weather, submitRequest }
}
export default useWeather
