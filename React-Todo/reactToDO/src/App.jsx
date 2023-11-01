import { useState } from 'react'
import TodoData from './todoData'


function App() {

const [input,setInput]=useState("")
const [todo,setTodo]=useState([])

 
  function addTodoTask(){

    let obj={
      id:new Date().getTime(),
      task:input,
      status:Math.random()<0.5
    }
    let data=[...todo,obj]
    setTodo(data);
  }

  function addInput(e){
    setInput(e.target.value)
  }



  return (
    <>
     <div>
        <input type="text" onChange={addInput} placeholder='Add Tasks' />
        <button onClick={addTodoTask}>Add Todo</button>
      </div>
      <TodoData todo={todo}/>
    </>
  )


}



export default App
