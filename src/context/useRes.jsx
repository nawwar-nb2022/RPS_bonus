import { createContext, useState } from "react";

const CounterContext = createContext({
    count  : 0 ,
    setCount : ()=> {}
})


const CounterProvider = ({children})=>{
    const [count , setCount] = useState()
    return (
        <CounterContext.Provider value={{count , setCount}}>
            {children}
        </CounterContext.Provider>
    )
}


export {CounterProvider , CounterContext};