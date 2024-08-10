import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

let addValue = () =>{
  if(counter<30){
    setCounter(counter+1);
  }
  // console.log("Value Added " , Math.random());
}

let removeValue = () => {
  if(counter>0)
  {
    setCounter(counter-1);
  }
}
  return (
    <>
     <h1>Counter Project</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}>Increment Value</button>

     <button onClick= {removeValue} >Decrement Value</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
