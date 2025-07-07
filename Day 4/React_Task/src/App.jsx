import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import Content from './Content'
import Signup from './Signup'
import SmallComp from './SmallComp'
import BigComp from './BigComp'
import Footer from './Footer'

function App() {
  return (
    <div>
      <NavBar/>
      <div className='main-content'>
          <Content/>
          <Signup/>
      </div>
      <SmallComp title="Explore" bgcolor="black"/>
      <BigComp title="Explore & Connect" image="/img1.jpg" bgcolor="white"/>
      <SmallComp title="Create" bgcolor="blue"/>
      <BigComp title="Create your passion" image="/img2.jpg" bgcolor="darkgray"/>
      <SmallComp title="Share" bgcolor="black"/>
      <BigComp title="Share what you read" image="/img3.jpg" bgcolor="white"/>
      <Footer/>
    </div>
  )
}

export default App
