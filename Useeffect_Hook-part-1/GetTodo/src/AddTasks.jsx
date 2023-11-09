
import axios from "axios";
import { useState } from "react";

export default function AddTask({fetchTasks,setTasks}){
    const [task,setTask]=useState("");
    

    const addTodoTask=async()=>{
           
        try {
            const myResponse=await axios.post(`http://localhost:3000/posts`,{
                title:task,
                status:false
            })
            console.log(myResponse.data)
            if(myResponse.status===201){
             setTasks((previousValues)=>{
                return ([...previousValues,myResponse.data])

             })
             setTask("")
            }
        } catch (error) {
            console.log(error)
            
        }
    }

    return(
        <div>
            <input type="text" value={task} onChange={(e)=>{
                setTask(e.target.value)
            }} />
            <button onClick={addTodoTask}>Add</button>
        </div>
    )
}