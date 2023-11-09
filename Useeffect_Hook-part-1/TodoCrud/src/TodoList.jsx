import axios from "axios";

export default function TodoList({ tasks, fetchTasks, setTasks }) {
  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/posts/${id}`);
      console.log(res);
      if (res.status === 200) {
        const newData = tasks.filter((e) => {
          return id !== e.id;
        });
        setTasks(newData);
        console.log(newData)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = (id) => {
    const statusData = tasks.map((data) => {
      if (data.id === id) {
        data.status = !data.status;
      }
      return data;
    });
    setTasks(statusData);
  };

  return (
    <div className="myTodoTable">
      <table style={{backgroundColor:"teal"}}>
        <thead></thead>
        <tbody style={{color:"white"}}>
          {tasks?.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>
                <button
                  style={{ backgroundColor: task.status ? "pink" : "red" }}
                  onClick={() => updateStatus(task.id)}
                >
                  {task.status ? "Completed" : "Not Completed"}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteTask(task.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
