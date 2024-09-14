
import Header from './components/Header'
import Game from './components/Game'
import Rule from './components/Rule'
import { useEffect } from 'react'
import { useLocalStorage } from './components/useLocalStorage'


function App() {
  
    const {setItem , getItem } = useLocalStorage("res")

  return (
    <>
      <Header/>

      <Game/>

      <Rule/>
    </>
  )
}

export default App
