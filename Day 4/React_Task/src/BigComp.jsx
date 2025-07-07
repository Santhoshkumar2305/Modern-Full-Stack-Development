import React from 'react'
import './App.css'

const BigComp = ({title,image,bgcolor}) => {
  return (
     <div className='bigcomponent' style={{ backgroundColor: bgcolor }}>
      <div className='big-left'>
        <img src={image} alt="Explore" className='big-img' />
      </div>
      <div className='big-right'>
        <h2>{title}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate et alias laborum odit aliquid tempore perspiciatis repudiandae hic?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate et alias laborum odit aliquid tempore perspiciatis repudiandae hic?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate et alias laborum odit aliquid tempore perspiciatis repudiandae hic?</p>
      </div>
    </div>
  )
}

export default BigComp