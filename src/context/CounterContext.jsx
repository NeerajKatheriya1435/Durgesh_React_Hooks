import { createContext, useState } from "react";

export const Counter = createContext();

export const CounterProvider = ({ children }) => {
    const [name, setName] = useState(0)
    return (
        <Counter.Provider value={{ name, setName }}>
            {children}
        </Counter.Provider>
    )
}