
import { useState } from 'react'
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
  const object1 =
  {
    id: 1,
    name: "Neeraj",
    age: 34
  }
  const [obj, setObj] = useState(object1)
  const handleClear = () => {
    setObj({ ...obj, name: "Tech-Mech", age: 89 })
  }
  return (
    <>
      <div className="container my-4">
        {
          // obj.map((element) => {
          //   return ()
          // })
          <h1>Name:{obj.name} && Age: {obj.age} Id:{obj.id}</h1>
        }
        <button className="btn btn-primary" onClick={handleClear}>
          Click Me
        </button>
      </div>
    </>
  )
}

export default App
