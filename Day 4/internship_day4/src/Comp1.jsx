import React from "react";
const Comp1 = () => {
    const a = React.createElement("div",null,
        React.createElement("img",{src:"/image.jpg",height:"200",width:"300"},null),
        React.createElement("h1",null,"hello"),
        React.createElement("div",null,
            React.createElement("p",null,"This is para"),
            React.createElement("button",null,"Submit"),
            React.createElement("div",null,
                React.createElement("p",null,"Empty para")
            )
        )
    );
    return(
        <>
            {a}
        </>
    )
}
export default Comp1;