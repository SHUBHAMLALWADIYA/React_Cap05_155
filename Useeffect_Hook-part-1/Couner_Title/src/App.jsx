import { useEffect, useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
  useEffect(handleClick,[])


  function handleClick(){
    setCount(count+1)
    document.title="Count : "+count;
  }
  return (
    <>
     <button style={{width:"500px",fontSize:"100px",backgroundColor:"teal",borderWidth:"5px"}} onClick={handleClick}>Click</button>
    </>
  )
}

export default App
