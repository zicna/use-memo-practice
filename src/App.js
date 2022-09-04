import React, {useState, useEffect, useMemo} from 'react'
import styles from "./App.module.css"



function App() {
const [number, setNumber] = useState(0)
const [dark, setDark] = useState(false)

// * 2. use to check for refenecial equality for object and arrays
const themeStyles = useMemo(()=> {
  return {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  }}, [dark])



const inputHandler = (event) => {
  console.log("hello")
  setNumber(event.target.value)
}
 
// * 1. use to run log tasks only in specific situations and not on every re-render
const doubledNumber = useMemo( ()=> slowFunction(number), [number])

useEffect(()=>{
  console.log("change theme running")
}, [themeStyles])

  return (
    <div>
      <h1 className={styles.heading}>useMemo Hook Practice</h1>
      <input type="number" value={number} onChange={inputHandler} />
      <button onClick={() => setDark((prevDark) => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubledNumber}</div>
    </div>
    
  );
}

function slowFunction(num){
  for(let i=0; i< 2000000000; i++){}
  return num * 2
}

export default App;
