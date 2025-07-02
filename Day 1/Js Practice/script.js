//1.Named Function 
greed()
function greed(){
    console.log("Hello World")
}
greed()

//2.Function Expression 
//add() Type Error
var add = function (){
    console.log("1 + 2 =",1+2)
}
add()

//3.Arrow Function

let mul = () =>{
    console.log("3 * 5 = ",3*5)
}
mul();

//Immediately Invoked Function Expression
(()=>{
    console.log("IIFE")
})();