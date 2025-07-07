import ButtonCount from "./ButtonCount";

const Counter = ({val,handleIncrement,handleDecrement,handleReset}) => {
    return(
        <div className="counter">
            <h1>Counter Application</h1>
            <p>{val}</p>
            <ButtonCount handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleReset={handleReset}/>
        </div>
    )
}
export default Counter;