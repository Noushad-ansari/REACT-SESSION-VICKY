
// classes is a template for an object


// let car = {
//     name : "swift",
//     color:"red",

// }

// let person = {
//     name : "john",
//     age : 25,
//     gender : "male"
// }



// class Person {

//     constructor(userName, userAge) {
//         this.name = userName
//         this.age = userAge
//         this.getName = function(){
//             console.log(this.name ,this.age)
//         }
//     }
  
// }

// let personOne = new Person("vicky",25)
// // console.log(personOne)
// personOne.getName()

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  
  console.log(myCar.show())
// console.log(myCar)