import { createContext, useState } from "react";

export const counter = createContext();

export const CounterProvider = ({ children }) => {
    const [name, setName] = useState("Tech_Mech")  //item
    return (
        <counter.Provider value={{ name, setName }}>
            {children}
        </counter.Provider>
    )
}
