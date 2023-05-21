import { useState } from 'react'
import './App.css'
import randomElement from './random'
import dbItems from "./db/db.json"
import Box from './components/Box'

function App() {

 const bgImages = ['bg1', 'bg2', 'bg3', 'bg4']
  
 const [quote, setQuote] = useState(randomElement(dbItems))
 const [bgImage, setBgImage] = useState(randomElement(bgImages))

  const handleChange = () => {
    setQuote(randomElement(dbItems))
    setBgImage(randomElement(bgImages))
  }


  return (
    <main className={`App ${bgImage}`}>
      <section className='App__container'>

        <h1> <b>GALAXIONARY</b> </h1>
      
        <Box phrase = {quote.phrase} handleChange= {handleChange}/>
      
        <p>Fuente: {quote.author} </p>
      
      </section>

      
    </main>
  )
}

export default App
