const getCoordinates = require('../utils/getCoordinates')
const getWeather = require('../utils/getWeather')

exports.getWeather = (req, res) => {
  const location = req.query.location

  getCoordinates(location, (result) => {
    if (result.error) {
      return result.error
    } else {
      res.json({
        location: result.location,
        longitude: result.longitude,
        latitude: result.latitude,
      })
      getWeather(result, (data) => {
        console.log(data)
      })
    }
  })
}
