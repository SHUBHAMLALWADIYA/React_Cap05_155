import TodoIteam from "./TodoIteam";

function TodoList({tasks,ontogglestatus}){
    return(
                <table>
                    <thead>
                        <th>Task Name</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task)=>(
                                <TodoIteam key={task.id} data={task} ontogglestatus={ontogglestatus}/>
                            ))
                        }
                    </tbody>
                </table>
    )
} 

export default TodoList;