import React, {useState} from 'react'
import classes from './DashboardGrid.module.scss'
import Selection from '../Selection/Selection'
import Button from '../UI/Button/Button'
import Display from '../Display/Display'
import Card from '../UI/Card/Card'

const DashboardGrid = (props) => {
  const [location, setLocation] = useState(null)
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  })

  const showCoordinates = async (someText) => {
    console.log('fetching the display endpoint')
    const res = await fetch(`/weather?location=${someText}`)
    const data = await res.json()
    const {newLocation, newLatitude, newLongitude} = await data
    console.log(data)

    //TODO: extract the properties
    console.log(newLocation)
    setLocation(newLocation)
    setCoordinates({
      latitude: data.latitude,
      longitude: data.longitude,
    })
  }

  const getAllData = async () => {
    await showCoordinates('cognac')
  }
  return (
      <div className={classes.dashboardGrid}>
        <Selection>
          <Button onClick={getAllData}>Get the all the data stuff</Button>
        </Selection>
        <Display>
          <Card>
            <div>{!location ? 'Loading...' : location}</div>
          </Card>
          <Card>
            <div>
              {!coordinates.latitude ? 'Loading...' : coordinates.latitude}
            </div>
          </Card>
          <Card>
            <div>
              {!coordinates.longitude ? 'Loading...' : coordinates.longitude}
            </div>
          </Card>

          {/*TODO: Add the weather below*/}
          
          <Card>
            <div>
              {!coordinates.longitude ? 'Loading...' : coordinates.longitude}
            </div>
          </Card>
        </Display>
      </div>
  )
}

export default DashboardGrid
