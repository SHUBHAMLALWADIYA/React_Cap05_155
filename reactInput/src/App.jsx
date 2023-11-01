import { useState } from 'react'

function App() {
  const [text,setText]=useState("")

   function handleClick(e){
    setText(e.target.value)
   }

   

   function clearData(){
    setText("")
  
   }

  return (
    <>
      <input type="text" placeholder='type message' value={text} onChange={handleClick}/>
      <button onClick={clearData}>Clear</button>
      <h2>{text}</h2>
      
    </>
  )
}

export default App
