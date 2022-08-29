// let ages = [12,45,78,3,4]

// let [a,b,...rest] =  ages
// // console.log(a)
// // console.log(i)
// console.log(rest)
    

let person = {
    name : "john",
    age : 25,
    gender: "male",
    address : "mumbai",
}

let {name:userName,...abc} = person
console.log(abc)

// let agesss = ages
// console.log(agesss)
// // let age1 = ages[0]
// let age2 = ages[1]
// let age3 = ages[1]
// let age4 = ages[1]

// for(let i = 0; i < ages.length; i++){

// }


// ************************Rest Parameter
// function sum(...numbers) {
// console.log(x)
// console.log(y)
//     console.log(numbers)
// //    numbers.forEach(num => {
// //     console.log(num)
// //    });
//     // let total = 0;
//     // for (const a of args) {
//     //     total += a;
//     // }
//     // return total;
// }

// sum("vicky", "male", 3,8,7,5,4,6,4,6,54);



// *******************spread parameter*****

// let arr1 = [2,4,6,8,10, ]
// let arr2 = [1,3,5,7,9]

// // let conctAray = arr1.concat(arr2)
// let conctAray = [...arr2, 4,5,78,1,5, ...arr1]
// console.log(conctAray)


// let obj1 = {
//     name : "john",
// }
// let obj2 = {
//     name : "dahl",
// }

// let conctObj = {...obj1 ,...obj2}
// console.log(conctObj)

