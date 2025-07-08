import React from "react";
import { useNavigate } from "react-router-dom";

const Table = ({userId,id,title,completed}) =>{
    const navigate=useNavigate();
    const handleNavigate = (title)=>{
        console.log(title);
        navigate(`/mobilepage/${title}`) 
    }
    return(
        <>
            <tr onClick={()=>handleNavigate(title)}>
                <td>{userId}</td>
                <td>{id}</td>
                <td>{title}</td>
                <td>{completed ? "Completed" : "Not Completed"}</td>
            </tr>
        </>
    )
}
export default Table;