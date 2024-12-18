import React from 'react'
import Comp2 from './Comp2'

const Comp1 = (props) => {
    return (
        <>
            <div>This is  {props.home}</div>
            <Comp2 />
        </>
    )
}

export default Comp1