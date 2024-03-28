import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import '../src/style/main.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Boksøk</h1>
    <p>Velkommen til boksøk</p>
    <div>
      <h2>Søk etter bøker her</h2>
      <input type="seach" />
    </div>
    </>
  )
}

export default App
