import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5;

  const addvalue=()=>{
    
    counter = counter + 1; 
   if(counter <25){
     setCounter(counter);
   }
    console.log("clicked", counter);
  }

 const removeVal = () => {
  if (counter > 0) {
    setCounter(counter - 1);
  }
}

  return (
    <>
     <h1>Reaccccccccct</h1>
     <h2>Counter value: {counter}</h2>
     <button
     onClick={addvalue}
     >Add Value{counter}</button>
     <br/>
     <button
     onClick={removeVal}
     >DESC value{counter}</button>
     <p>Footer : {counter}</p>
    </>
  )
}

export default App
