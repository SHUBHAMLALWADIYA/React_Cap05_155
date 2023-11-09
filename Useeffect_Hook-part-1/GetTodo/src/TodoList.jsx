import axios from 'axios'

export default function TodoList({tasks,fetchTasks,setTasks}){



    const deleteTask=async(id)=>{
        try {
            const res=await axios.delete(`http://localhost:3000/posts/${id}`);
            console.log(res)
            if(res.status===200){
                const newData=tasks.filter((e)=>{
                    return(id!==e.id)
                })
                setTasks(newData)
            }
            
        } catch (error) {
            console.log(error)
        }
    };

    return(
        <div >
            <table>
                <thead></thead>
                <tbody>
                {tasks?.map((task)=>(<tr key={task.id}>
                        <td>{task.title}</td>
                        <td><button onClick={()=>{deleteTask(task.id)}}>Delete</button></td>
                    </tr> ))}
                </tbody>
            </table>
            
                {/* /* <div key={task.id}>
                    <span>{task.title}</span>
                    <button onClick={()=>{deleteTask(task.id)}}>Delete</button>
                </div> */ }
           
        </div>
    )
}