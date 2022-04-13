import { useState } from 'react'
import Card from './components/UI/Card/Card'
import DashboardGrid from './components/DashboardGrid/DashboardGrid'
import Selection from './components/Selection/Selection'
import Display from './components/Display/Display'

import './App.scss'

function App() {
  const [displayText, setDisplayText] = useState(null)
  const [displayText2, setDisplayText2] = useState(null)
  const [text, setText] = useState(null)

  const getDataFromApi = async () => {
    const res = await fetch('/api')
    const data = await res.json()
    setDisplayText(data.message)
  }

  const getDataFromTest = async () => {
    const res = await fetch('/test')
    const data = await res.json()
    setDisplayText2(data.message)
  }

  const displaySomeText = async (someText) => {
    console.log('fetching the display endpoint')
    const res = await fetch(`/display?text=${someText}`)
    const data = await res.json()
    setText(data.message)
  }

  const getAllData = async () => {
    await getDataFromApi()
    await getDataFromTest()
    await displaySomeText('Yoyoyo')
  }

  return (
    <div className="App">
      <DashboardGrid>
        <Selection>
          <button onClick={getAllData}>Get the all the data stuff</button>
        </Selection>
        <Display>
          <Card>
            <p>{!displayText ? 'Loading...' : displayText}</p>
          </Card>
          <Card>
            <p>{!displayText2 ? 'Loading...' : displayText2}</p>
          </Card>
          <Card>
            <p>{!text ? 'Loading...' : text}</p>
          </Card>
        </Display>
      </DashboardGrid>
    </div>
  )
}

export default App
