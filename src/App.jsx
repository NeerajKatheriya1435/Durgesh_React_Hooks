
import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)
  let durgesh = useRef(0)
  let divref = useRef()

  useEffect(() => {
    durgesh.current = durgesh.current + 1;
    console.log("I am on every render... ", durgesh.current)
  })
  useEffect(() => {
    // console.log(divref.current.style.backGroundColor = "red")

  }, [color])
  const handlClickColor = () => {
    setColor(color + 1);
    divref.current.style.backgroundColor = "red";
  }
  const handlClickCount = () => {
    setCount(count + 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <h2>{color}</h2>
      <button className="btn btn-primary" onClick={handlClickColor}>
        Click Color
      </button>
      <button className="btn btn-primary" onClick={handlClickCount}>
        Click Count
      </button>
      <div className="container" ref={divref}>
        You are a good student
      </div>
    </>
  )
}

export default App
