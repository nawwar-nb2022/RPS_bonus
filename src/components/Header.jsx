import Logo_bonus from "../assets/icons/Logo_bonus"
import "../styles/header.css"
import { useLocalStorage } from "./useLocalStorage"

import {useState , useEffect, useContext} from "react"
import { CounterContext } from "../context/useRes"

const Header = () => {
    
    const {count, setCount} = useContext(CounterContext)
    const { getItem } = useLocalStorage("res")
    
    useEffect(()=>{        
        if(getItem()){

            setCount(getItem())
            // console.log({count}, getItem())

        }
    },[ getItem()])

    return (
        <header>
            <div className="logoSection">
                <Logo_bonus/>
            </div>

            <div className="score">
                    <p className="text">score</p>
                    <p className="res">
                        {count ? count : "0"}
                    </p>
            </div>

        </header>
    )
}

export default Header
