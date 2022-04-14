const getCoordinates = require('../utils/getCoordinates')

exports.getDisplay = (req, res) => {
  const location = req.query.location

  getCoordinates(location, (result) => {
    res.json({
      location: result.location,
      longitude: result.longitude,
      latitude: result.latitude,
    })
  })
}
