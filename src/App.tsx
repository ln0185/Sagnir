import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"
import "./output.css"
import { StoriesPage } from './assets/pages/StoriesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <StoriesPage />
    </>
  )
}

export default App
