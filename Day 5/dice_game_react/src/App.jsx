import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './Player'
import Controls from './Controls'
import Dice from './Dice'

function App() {
  const [score1,setScore1] = useState(0);
  const [score2,setScore2] = useState(0);
  const [current1,setCurrent1] =useState(0);
  const [current2,setCurrent2] =useState(0);
  const [activePlayer,setActivePlayer]=useState(0);
  const [diceValue,setDiceValue] = useState(0);
  const [isPlaying,setIsPlaying] = useState(true);

  const rollInterval = useRef();

  const switchPlayer = () =>{
    clearInterval(rollInterval.current);
    if(activePlayer===0)
        setCurrent1(0);
    else  
      setCurrent2(0);
    setActivePlayer(prev => 1-prev);
  }

  const handleRoll = () =>{
    if(isPlaying){
      clearInterval(rollInterval.current);
      rollInterval.current = setInterval(()=>{
          const dice = Math.floor(Math.random()*6)+1;
          setDiceValue(dice);
          if(dice!==1){
            if(activePlayer===0){
              setCurrent1((prev)=>prev+dice);
            }
            else{
              setCurrent2((prev)=>prev+dice);
            }
          }
          else{
            switchPlayer();
          }
      },1000);
    }
  }

  const handleHold = () =>{
    clearInterval(rollInterval.current);
      if(isPlaying){
        if(activePlayer==0){
          const newScore=score1+current1;
          setScore1(newScore);
          setCurrent1(0);
          if(newScore >=100){
            setIsPlaying(false);
            alert("Player 1 wins");
            return;
          }
        }
        else{
          const newScore = score2+current2;
          setScore2(newScore);
          setCurrent2(0);
          if(newScore>=100){
            setIsPlaying(false);
            alert("Player 2 wins");
            return;
          }
        }
        switchPlayer();
      }
  }

  const handleNewGame = () =>{
      clearInterval(rollInterval.current);
      setScore1(0);
      setScore2(0);
      setCurrent1(0);
      setCurrent2(0);
      setActivePlayer(0);
      setDiceValue(0);
      setIsPlaying(true);
  }

  return (
    <div className='app'>
      <div className='players'>
        <Player playerid={1} score={score1} current={current1} isActive={activePlayer===0}/>
        <Player playerid={2} score={score2} current={current2} isActive={activePlayer===1}/>
      </div>
      <Dice diceValue={diceValue}/>
      <Controls handleRoll={handleRoll} handleHold={handleHold} handleNewGame={handleNewGame} isPlaying={isPlaying}/>
    </div>
  )
}

export default App
