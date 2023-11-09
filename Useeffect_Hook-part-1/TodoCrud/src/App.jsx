import { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTask from './AddTasks';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading,setLoding]=useState(false);
  const [error,setError]=useState(null);
  const [page,setPage]=useState(1)


  const fetchTasks=async()=>{
    setLoding(true);

    try {
      const response=await axios.get(`http://localhost:3000/posts?_limit=4&_page=${page}`);
      setTasks(response.data);
    
    } catch (error) {
      
      setError(error)
      console.log(error)
    }finally{
       setLoding(false)
    }
  };

  useEffect(()=>{
    fetchTasks();
  },[page])
  
  
  
  return (
    <div className='App'>
      <AddTask setTasks={setTasks} fetchTasks={fetchTasks}/>
        {error && <div>Error :{error}</div>}
        {loading? (<div style={{fontSize:"100px"}}>Loading....</div>):<TodoList tasks={tasks} setTasks={setTasks} fetchTasks={fetchTasks}/>}
        <div>
           <button onClick={()=>setPage(page+1)}>Next Page</button>
           <button  onClick={()=>setPage(page-1)}>Previous page</button>
        </div>
    </div>
  )
}

export default App
