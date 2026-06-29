import { useState } from 'react'

import './App.css'
import {ReducerComp} from "./hooks/UseReducer/index.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<ReducerComp/>
    </>
  )
}

export default App
