import React, { useContext } from 'react'
import { counter } from '../context/CounterContext'
const Comp3 = () => {
    const counter123 = useContext(counter)
    return (
        <>
            <div>This is Comp3 {counter123.name}</div>
            <button className="btn btn-secondary" onClick={() => { counter123.setName("Durgesh") }} >
                Change Name
            </button>
        </>
    )
}

export default Comp3