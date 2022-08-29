

// function changeTheme(){
    
//    let btn =  document.querySelector("#btn")
//    btn.style.background = "red"
// //   btn.classList.toggle("dark")
// }

// function defination
// function sum(a,b){
//   let result = a + b
//   console.log(result)
// }
// sum(2,4)


// function expression
// let sub = function(a,b){
// let result = a - b
// // console.log(result)
// return result
// }

// console.log(sub(5,3))

// Ecma
// es 6
// fat arrow function /  es 6 function / arrow function

// let greet = a => a
    
//   console.log(greet("hello"))

// let person = {
//     name :"john",
//     age : 25,
//     gender : "male",
//     getName : function(){
//         console.log("getName")
//     }
// }

// console.log(person.name)

// person.getName()

// es6 objectl litrals
// let person = {
//     name :"john",
//         age : 25,
//         gender : "male",
//         getName (){
//             console.log("getName")
//         }
// }
// person.getName()

// let x = undefined
// console.log(x)
// window.alert("hello")
// console.log()

// console.log(window)







// function sub(a,b) {
//     let result =  a - b;
// console.log(result)
// }


// function mul(a,b) {
//     let result =  a * b;
// console.log(result)
// }


// call back function is function that is passed as a argument inside another function 

// function sum(a,b) {
//     let result =  a + b;
// console.log(result)
// }


// // callback function 
// function calc(cb){
// cb(5,2)
// }

// calc( ()=>{
//     console.log("hello")
// })


// function greet(){
//     console.log("good evening")
// }

// setTimeout(() => {
//     console.log("settime")
// }, 0);

// let timer = setInterval(() => {
//     console.log("set Interval")
// }, 2000);

// clearInterval(timer)
// mongodb express react node js


// this keyword in javascript

// console.log(this)

// let person = {
//     name : "john",
//     age : 25,
//     gender : "male",
//     getName(){
//         console.log(this)
//     }
// }

// "use strict";

// console.log(this)
//  function greet(){
//     console.log(this)
//  }
//  greet()

// person.getName()





let input  = document.querySelector("#input")
input.addEventListener("change",(e)=>{
    if(e.target.value == null){
        console.log("nothing inside this")
    }else{
        console.log(e.target.value)
    }

})

console.log(input)
