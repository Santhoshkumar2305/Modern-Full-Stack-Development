// let b = "Result is ready";
// console.log(b);

// setTimeout(() => {
//     console.log("After some time we got result");
// }, 1000);

// var a = 10;
// console.log(a);

// Pyramid Structure (Callback Hell Example)
// setTimeout(() => {
//     console.log("1st");
//     setTimeout(() => {
//         console.log("2nd");
//         setTimeout(() => {
//             console.log("3rd");
//             setTimeout(() => {
//                 console.log("4th");
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);


// let myPromise = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve("I have to give treat");
//     } else {
//         reject("I will not fulfill my promise");
//     }
// });



// myPromise
//     .then((w) => {
//         console.log(w,'fgfggfg');
//     })
//     .catch((w) => {
//         console.log(w);
//     });

// const handlePromise = async () => {
//     try {
//         const a = await myPromise;
//         console.log(a+"xxxx");
//     } catch (err) {
//         console.log("Error from Async", err);
//     } finally {
//         console.log("It will run for every case");
//     }
// };

// handlePromise();

// const fetchData = async () =>{
//     try{
//         const res = await fetch("https://catfact.ninja/fact");
//         console.log(res);
//         if(res.ok){
//             const data = await res.json()
//             console.log(data);
//         }
//     }
//     catch(error){
//         console.log(error);   
//     }
// };
// fetchData();

console.log(typeof([]+[]))
console.log([1]+[2])

