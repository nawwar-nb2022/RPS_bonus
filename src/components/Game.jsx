
import Rock from "../assets/icons/Rock"
import Bg_pentagon from "../assets/icons/Bg_pentagon"
import Scissors from "../assets/icons/Scissors"
import Paper from "../assets/icons/Paper"
import Lizard from "../assets/icons/Lizard"
import Spock from "../assets/icons/Spock"

import "../styles/game.css"

import ChooseComp from "./choose"
import { useContext, useEffect, useState } from "react"
import { getWinner } from "./checkWinner"
import { useLocalStorage } from "./useLocalStorage"
import { CounterContext } from "../context/useRes"






const Game = () => {
    const chooseArray = ["Scissors" , "Paper" , "Rock" , "Lizard" , "Spock"]
    
    const [choose , setChoose] = useState()
    const [step , setStep] = useState(0)
    const [computer , setComputer] = useState()
    const [result , setResult] = useState()


    const handleLogo = (str)=>{
        switch (str){
            case "Scissors": 
                return <Scissors/>
            case "Paper" :
                return <Paper/>
            case "Rock" :
                return <Rock/>
            case "Lizard" :
                return <Lizard/>
            case "Spock" :
                return <Spock/>
            default :
                return 
        }  
    }
     const handleResult = (ch = "Scissors")=>{
                let t = Math.floor(Math.random() * (5) ) ;
                    
                
                let comp = chooseArray[t]

                let res = getWinner(ch , comp)
                // let t = Math.floor(Math.random() * (max - min + 1) ) + min;
                return { res , comp  , ch}
        }
    

 
    useEffect(()=>{
        // console.log(step)
        if(step== 1){
           var timeOut =  setTimeout(()=>{
                let {res , comp , ch} = handleResult(choose)
                setComputer(comp)
                setResult(res)
                setStep(2)
            },[1000])
            
        }
        return ()=>{
            clearTimeout(timeOut)
        }
    },[step ])
    
    const {count , setCount} = useContext(CounterContext)
    useEffect(()=>{
    if(result == "winner"){
        let item = Number(getItem()) +1 
        setItem(item)
        setCount(item)
        // console.log(getItem() , "ww")       
    }else if(result == "loser"){
        let item = Number(getItem()) - 1
        setItem(item) 
        setCount(item)
        // console.log(getItem() , "ll")       
    }else{
        
        // console.log(getItem() , "dd")       
    }

    },[result])

    const handleAgain = ()=>{
        setStep(0)
        setResult("")
        setComputer("")
        setChoose("")
    }
 

    const {setItem , getItem } = useLocalStorage("res")

    return (
        <div className="GameContainer">
            {step == 0 ? 
                <div className="step-1">
                    <div className="GameBackground">
                        <Bg_pentagon/>
                    </div>
                            <div className="rock" onClick={()=>{setChoose("Rock") ,setStep(1)}}>
                                <ChooseComp  className="Rock" winner={false} >
                                    <Rock/>    
                                </ChooseComp>
                            </div>
                            <div className="scissors" onClick={()=>{setChoose("Scissors") , setStep(1)}}>
                                <ChooseComp  className="Scissors" winner={false} >
                                    <Scissors/>    
                                 </ChooseComp>
                            </div>
                            <div className="paper" onClick={()=>{setChoose("Paper") , setStep(1)}}>
                                <ChooseComp className="Paper" winner={false}>
                                    <Paper/>    
                                </ChooseComp>
                            </div>
                            <div className="lizard" onClick={()=>{setChoose("Lizard") , setStep(1)}}>
                                <ChooseComp  className="Lizard" winner={false}>
                                    <Lizard/>    
                                </ChooseComp>
                            </div>
                            <div className="spock" onClick={()=>{setChoose("Spock") , setStep(1)}}>
                                <ChooseComp  className="Spock" winner={false}> 
                                    <Spock/>
                                </ChooseComp>
                            </div>
                
                </div> :
            step == 1  ?
                
                <div className="step-2">
                    <div className="data">
                        <ChooseComp  className={choose} winner={false} >
                                {handleLogo(choose)}
                        </ChooseComp>
                        <p>You Picked</p>
                    </div>

                    <div className="data">
                        <ChooseComp className={computer} winner={false} >
                            {handleLogo(computer)}
                        </ChooseComp>
                        <p>The house Picked </p>
                    </div>
                </div> 
            : step == 2 ?
                <div className="step-2">
                    <div className={`data ${result == "winner" ? 'winner' : '' }`}>
                        <ChooseComp  className={choose} winner={false} >
                                {handleLogo(choose)}
                        </ChooseComp>
                        <p>You Picked</p>
                    </div>

                    <div className="desktop result">
                        <p>
                            {result == "winner" ? "you win" : result == "loser" ?  "you lost"  : "draw"}
                        </p>

                        <button className="btn" onClick={handleAgain}>
                                play agin
                        </button>
                    </div>

                    <div className={`data ${result == "loser" ? 'winner' : '' }`}>
                        <ChooseComp className={computer} winner={false} >
                            {handleLogo(computer)}
                        </ChooseComp>
                        <p>The house Picked </p>
                    </div>

                    <div className="mobile result">
                        <div>
                            <p>
                                {result == "winner" ? "you win" : "you lost"}
                            </p>

                            <button className="btn"  onClick={handleAgain}>  
                                    play agin
                            </button>
                        </div>
                    </div>
                </div> 

                : <></>
            }


        </div>
    )
}


export default Game
