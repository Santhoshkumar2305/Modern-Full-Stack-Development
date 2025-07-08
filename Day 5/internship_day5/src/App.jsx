import { useState } from 'react';
import './App.css'
import {Outlet} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function App() {
  const [val,setVal] = useState(0);

  return (
    <div className='app'>
      <nav>
        <NavLink to={"/"} className={"navlink"}>Home</NavLink>
        <NavLink to={"/about"} className={"navlink"}>About</NavLink>
        <NavLink to={"/contact"} className={"navlink"}>Contact</NavLink>
        <NavLink to={"/users"} className={"navlink"}>Users</NavLink>
        <NavLink to={"/help"} className={"navlink"}>Help</NavLink>
      </nav>
      <Outlet context={{val,setVal}}></Outlet>
    </div>
  )
}

export default App;
