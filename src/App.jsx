import { useState } from 'react'
// import './App.css'
import { Calculate } from './components/Calculate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculate />
    </>
  )
}

export default App
