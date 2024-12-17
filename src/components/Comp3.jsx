import React, { useContext } from 'react'
import { Counter } from '../context/CounterContext';
const Comp3 = () => {
    const object1 = useContext(Counter);
    return (
        <>
            <div>This is Comp3 {object1.name}</div>
            <button className="btn btn-secondary" onClick={() => { object1.setName("Puja") }}>
                Change Name
            </button>
        </>
    )
}

export default Comp3