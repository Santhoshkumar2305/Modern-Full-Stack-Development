import { useEffect, useState,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './Comp1'
import Counter from './Counter'

function App() {
  let [val,setVal] = useState(0);
  // let a=useRef();

  const handleIncrement = () => {
    setVal(val+1);
    console.log(val);
    
  }
  const handleDecrement = () => {
    setVal(val-1);
    console.log(val);
  }

  useEffect(()=>{
    if(val<0){
      // a.current.style.color="Red";
      let timer=setTimeout(()=>{
        setVal(0);
      },2000);
      return (()=>clearTimeout(timer));
    }
  },[val])
  // a.current.style.color="Green";

  return (
    <div className='app'>
      <h1 >Counter Application</h1>
      <div className='counter'>
        <p>Count: {val}</p>
        <div>
          <button className='inc' onClick={handleIncrement}>Increment</button>
          <button className='dec' onClick={handleDecrement}>Decrement</button>
        </div>
      </div>


      {/* <Counter val={val} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleReset={handleReset}/> */}
    </div>
  )
}

export default App;
