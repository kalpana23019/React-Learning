import { useState } from 'react'

import './App.css'
// import {ReducerComp} from "./hooks/UseReducer/index.jsx";
import {ReactMemo} from "./hooks/Memo/ReactMemo.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/*<ReducerComp/>*/}
        <ReactMemo/>
        </>
  )
}

export default App
