
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  // const [name, setName] = useState("Neeraj Katheriya")
  // const handleChange = () => {
  //   if (name === "Neeraj Katheriya") {
  //     setName("Durgesh First");
  //   } else {
  //     setName("Neeraj Katheriya");
  //   }
  // }
  // const object1 =
  // {
  //   id: 1,
  //   name: "Neeraj",
  //   age: 34
  // }
  // const [obj, setObj] = useState(object1)
  // const handleClear = () => {
  //   setObj({ ...obj, name: "Tech-Mech", age: 89 })
  // }
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

  // Runs on every render
  useEffect(() => {
    console.log("Hello Durgesh i am on every render");
  })

  // Runs on only first render

  useEffect(() => {
    console.log("This was called only on first render")
  }, [])

  useEffect(() => {
    console.log("This is called when count is changed")
  }, [count])

  useEffect(() => {
    console.log("This is called when color is changed")
  }, [color])




  const handlClickColor = () => {
    setColor(color + 1);
  }
  const handlClickCount = () => {
    setColor(count + 1);
  }
  return (
    <>
      {/* <div className="container my-4">
        {
          // obj.map((element) => {
          //   return ()
          // })
          <h1>Name:{obj.name} && Age: {obj.age} Id:{obj.id}</h1>
        }
        // <button className="btn btn-primary" onClick={handleClear}>
        //   Click Me
        // </button>
      </div> */}
      {/* UseEffect */}
      <h1>{count}</h1>
      <h2>{color}</h2>
      <button className="btn btn-primary" onClick={handlClickColor}>
        Click Color
      </button>
      <button className="btn btn-primary" onClick={handlClickCount}>
        Click Count
      </button>

    </>
  )
}

export default App
