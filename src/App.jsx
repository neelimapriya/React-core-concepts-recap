import { useState } from 'react'
import './App.css'
import Posts from './Posts'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1> React Core Concepts recap</h1>
      <ol>
        <li>Components</li>
        <li>Jsx</li>
        <li>Props</li>
        <li>Even Handler</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <hr/>
      <Posts></Posts>
     
    </>
  )
}

export default App
