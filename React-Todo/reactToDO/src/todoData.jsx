function TodoData({ todo }) {
  return (
    <div>
      <table>
        <thead>
          <th>Task Name</th>
          <th>Status</th>
        </thead>
        <tbody>
          {todo?.map((data) => (
            <tr key={data.id}>
                <td style={{backgroundColor:"yellow"}}>{data.task}</td>
                <td style={data.status?{backgroundColor:"yellow"}:{backgroundColor:"red"}}>{data.status?"true":"false"}</td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoData;
