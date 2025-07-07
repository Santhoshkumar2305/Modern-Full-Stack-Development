import React from 'react'
import './App.css'

const Signup = () => {
  return (
    <div className='signup'>
      <div className='signup-container'>
      <form className="signup-form">
        <h2>Sign Up Today</h2>
        <p>Please fill out this form to register</p>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="password" />
        <button type="submit">submit</button>
      </form>
      </div>
    </div>
  )
}

export default Signup