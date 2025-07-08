import React from 'react'

const Dice = ({diceValue}) => {
    if(diceValue===0)  return null;
  return (
    <>
        <img src={`/dice-${diceValue}.jpg`} alt={`Dice ${diceValue}`} className='dice'/>
    </>
  )
}
export default Dice