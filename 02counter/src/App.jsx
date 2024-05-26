import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  let [message, setMessage] = useState('');
  // let counter = 15
  let addValue = ()=>{
   if(counter >= 20){
    setMessage('Limit is Over');
    return  
   }
   setCounter(counter + 1)
   setMessage('');
  }

  let removeValue = () =>{
   if(counter <= 0){
    setMessage('Limit is Over');
    return
   }
   setCounter(counter - 1) 
   setMessage(''); 
  }
  
  return (
    <>
      <h1>Well-Come To Reactjs</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
       {message && <p style={{ color: 'red',fontWeight: 600 }}>{message}</p>}
    </>
  )
}

export default App
