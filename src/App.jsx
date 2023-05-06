import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { width } from '@mui/system'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={(e) => {
        setShow(!show)
      }}>SEARCH</button>
      <input name="text" id="text" className={show ? "" : "notShow"} onChange={(e) => {
        const offsetWidth = Number(e.target.offsetWidth)
        if(e.target.scrollWidth > offsetWidth) e.target.className = "biggerInput"
      }}/>
    </>
  )
}

export default App
