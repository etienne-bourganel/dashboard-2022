const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

const getWeather = async (coordinates, callback) => {
  const { latitude, longitude } = coordinates
  const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${process.env.WEATHER_API_KEY}&units=metric`

  try {
    const response = await fetch(weatherUrl)
    const result = await response.json()
    callback({
      error: null,
      weatherResult: result,
    })
  } catch (error) {
    console.log('There was a problem trying to get the weather')
    callback({
      error: error,
      weatherResult: undefined,
    })
  }
}

module.exports = getWeather
