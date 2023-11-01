import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          Count 
        </button>
       <h2>{count}</h2>
    </>
  )
}

export default App
