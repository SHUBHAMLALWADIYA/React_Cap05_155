function TodoIteam({data,ontogglestatus}){
    return(

        <tr onClick={()=>ontogglestatus(data.id)}>
            <td>{data.todo}</td>
            <td style={{color:data.status?"green":"red"}}>{data.status?"true":"false"}</td>
        </tr>
    )
    }

    export default TodoIteam