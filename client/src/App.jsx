import { useState } from 'react'
import Card from './components/UI/Card/Card'
import DashboardGrid from './components/DashboardGrid/DashboardGrid'
import Selection from './components/Selection/Selection'
import Display from './components/Display/Display'
import Button from './components/UI/Button/Button'

import './App.scss'

function App() {
    const [location, setLocation] = useState(null)
    const [coordinates, setCoordinates] = useState({
        latitude: 0,
        longitude: 0,
    })

    const showCoordinates = async (someText) => {
        console.log('fetching the display endpoint')
        const res = await fetch(`/display?location=${someText}`)
        const data = await res.json()
        setLocation(data.location)
        setCoordinates({
            latitude: data.latitude,
            longitude: data.longitude,
        })
    }

    const getAllData = async () => {
        await showCoordinates('cognac')
    }

    return (
        <div className="App">
            <DashboardGrid>
                <Selection>
                    <Button onClick={getAllData}>
                        Get the all the data stuff
                    </Button>
                </Selection>
                <Display>
                    <Card>
                        <div>{!location ? 'Loading...' : location}</div>
                    </Card>
                    <Card>
                        <div>
                            {!coordinates.latitude
                                ? 'Loading...'
                                : coordinates.latitude}
                        </div>
                    </Card>
                    <Card>
                        <div>
                            {!coordinates.longitude
                                ? 'Loading...'
                                : coordinates.longitude}
                        </div>
                    </Card>
                </Display>
            </DashboardGrid>
        </div>
    )
}

export default App
