
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMousePointer } from './hooks/useMousePointer'
import { useState } from "react"
import { useDebounce } from './hooks/useDebounce'

function App() {
  const [input, setinputValue] = useState("");
  const debouncedValue = useDebounce(input, 350);

  return <div>
   <input type='text' autoComplete='off' autoFocus onChange={(e) => {setinputValue(e.target.value)}} value={input} placeholder='Search...'></input>
   <p>Debounced value is {debouncedValue}</p>
  </div>
}


export default App
