let userBox =  document.querySelector("#user")


// function fetchData() {
//     fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())
// .then(data=>{
//     for (let index = 0; index < data.length; index++) {
//        console.log(data[index].name)
//         let h1 = document.createElement("h1")
//         h1.innerHTML = data[index].name
//         document.body.appendChild(h1)
//     }
// })
// }


function fetchData(){
// Create an XMLHttpRequest object
const xhttp = new XMLHttpRequest();

// Define a callback function
// xhttp.onload = function() {
//   // Here you can use the Data
//   let users =  xhttp.responseText
//   console.log(users)
// // console.log(  JSON.stringify(users))
// }
xhttp.onreadystatechange  = function(){
    if(this.readyState ==4 && this.status == 200 ){
        console.log(this.responseText)
    }
} 
// Send a request
xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
xhttp.send();
}

