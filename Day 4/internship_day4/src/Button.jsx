const Button = ({handle,classname,text}) => {
    return (
        <>
            <button className={classname} onClick={handle}>{text}</button>
        </>
    )
}
export default Button;