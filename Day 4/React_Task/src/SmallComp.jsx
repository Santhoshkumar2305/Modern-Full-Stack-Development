import React from 'react'
import './App.css'

const SmallComp = ({title,bgcolor}) => {
  return (
    <div className='smallcomponent' style={{ backgroundColor: bgcolor }}>
        <h1 className='small-title'>{title}</h1>
        <p className='small-desc'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          doloribus ut iure itaque quibusdam rem accusantium deserunt
          reprehenderit sunt minus.
        </p>
        <button className='small-btn'>findout</button>
    </div>
  )
}

export default SmallComp