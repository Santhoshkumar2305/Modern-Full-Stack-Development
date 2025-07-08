import React from 'react'
import { useOutlet, useOutletContext, useParams } from 'react-router-dom'

const Mobile = () => {
    const {mobile} = useParams();
    const {val,setVal}=useOutletContext();
    setVal(5)
  return (
    <div>
        <h1>Mobile page</h1>
        <p>{mobile}</p>
        <p>{val}</p>
    </div>
  )
}

export default Mobile