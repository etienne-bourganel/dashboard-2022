const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

const getCoordinates = async (locationName, callback) => {
  const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationName}.json?access_token=${process.env.GEOCODE_API_KEY}&limit=1`

  try {
    const response = await fetch(geocodingUrl)
    const result = await response.json()
    const [data] = result.features
    const location = data.text
    const [longitude, latitude] = data.center
    console.log(result)
    callback({
      location: location,
      longitude: longitude,
      latitude: latitude,
    })
  } catch (error) {
    console.log('There was a problem')
  }
}

module.exports = getCoordinates
