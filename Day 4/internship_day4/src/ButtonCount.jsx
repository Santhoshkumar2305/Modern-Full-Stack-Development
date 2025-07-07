import Button from "./Button"

const ButtonCount = ({handleIncrement,handleDecrement,handleReset}) => {
    return (
        <>
            <Button handle={handleIncrement} classname="inc" text="Increment"/>
            <Button handle={handleDecrement} classname="dec" text="Decrement"/>
            <Button handle={handleReset} classname="reset" text="Reset"/>
        </>
    )
}
export default ButtonCount;