let age = [1,2,3]

// let newArr = [ ]
// for(let i = 0; i< age.length; i++){
//    newArr.push(age[i] + 5)
//     // console.log(age[i])
//     if(age[i]> 25){
//         newArr.push(arr[i])
//     }
// }


// let newArray = age.forEach(element => {
//     console.log(element + 5)
// });
// console.log(newArray)

// let newArr  = age.map((elem,index,array)=>{
//     // console.log(array)
//     return elem  > 25
// })
// console.log(newArr)


// let newArr = age.filter((elem,ind,array)=>{
//    return  elem > 25
// })

// console.log(newArr)


let newArr =  age.reduce((currentValue,accumulator)=>{
    return  currentValue + accumulator
},5)

console.log(newArr)