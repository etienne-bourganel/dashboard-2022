import {useState, useEffect} from 'react'

import './App.css';

function App() {
  const [displayText, setDisplayText] = useState(null)

  useEffect(async()=> {
    const res = await fetch('/api')
    const data = await res.json()
    setDisplayText(data.message)
  }, [])

  return (
    <div className="App">
        <p>{!displayText? "Loading..." : displayText}</p>
    </div>
  );
}

export default App;
