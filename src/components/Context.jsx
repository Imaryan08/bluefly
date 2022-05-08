import {createContext,useState} from "react"

 export const Cartprod=createContext()

function Context({children}){
    const[cart,setCart] =useState([])
    return (
        <Cartprod.Provider value={[cart,setCart]}>
         {children}
        </Cartprod.Provider>
    )
}

export{Context}