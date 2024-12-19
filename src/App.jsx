
import { useCallback, useMemo, useState } from 'react'
import './App.css'
// import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  const num = new Array(3000000).fill(0).map((_, i) => {
    return {
      index: i,
      isMagical: i === 2900000
    }
  })

  const [number, setNumber] = useState(num)
  const magical = useMemo(() => number.find((i) => i.isMagical === true), [number])
  return (
    <div className='text-center my-4'>
      {/* <Navbar /> */}
      <h3 className="text-primary">
        Hello this is my count : {count} with magic: {magical.index}
      </h3>

      <button className="btn btn-primary" onClick={() => {
        setCount(count + 1);
        if (count == 10) {
          setNumber(new Array(100000).fill(0).map((_, i) => {
            return {
              index: i,
              isMagical: i === 19000
            }
          }))
        }
      }


      }>
        Click Count
      </button>
    </div >
  )
}

export default App
