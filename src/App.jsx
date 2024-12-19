
import { useCallback, useState } from 'react'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)
  const home = "hello";
  // const getNewHome = () => {
  //   return "Value";
  // }
  const getNewHome = useCallback(
    () => {
      return "hello" + count
    },
    [count]
  )

  return (
    <div className='text-center'>
      <Navbar home={home} getNewHome={getNewHome} />
      <h3 className="text-primary">
        Hello this is my count : {count}
      </h3>

      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click Count
      </button>
    </div >
  )
}

export default App
