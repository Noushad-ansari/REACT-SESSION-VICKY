// let myPromise = new Promise((resolve, reject) => {
//     let money = 20
//     if (money === 15) {
//         resolve("yes you can buy chocolate")
//     } else {
//         reject("Something went wrong")
//     }
// })

// myPromise
//     .then((ResovleData) => { console.log(ResovleData) })
//     .catch((err) => { console.log(err) })

// function signup(cb) {
//     setTimeout(() => {
//         console.log("signup")
//         cb()
//     }, 3000);
// }
// function login(cb) {
//     setTimeout(() => {
//         console.log("login")
//         cb()
//     }, 1000);
// }

// function showProfile() {
//     setTimeout(() => {
//         console.log("showProfile")
//     }, 2000);

// }
// signup(()=>{
//     login(()=>{
//         showProfile() 
//     })
// })

// showProfile()


function signup() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("signup")
            res("resovle")
            // rej("something went wrong")
        }, 1000);
    })

}
function login() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Login")
            res("resovle login wala")
            // rej("something went wrong")
        }, 1000);
    })
}

function showProfile() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("showProfile")
            res("resovle ")
            // rej("something went wrong")
        }, 1000);
    })
}





// signup()
// .then(login)
// .then(showProfile)
// .catch((err)=>console.log(err))


async function authentication() {
    try {
        await signup()
        await login()
        await showProfile()
    } catch (err) {
        console.log(err)
    }
    throw "something went wrong in authentication"

}
authentication()
.then(()=>console.log("everything has executed"))
.catch((err)=>console.log(err))










// callback hell
// signup(()=>{
//     login(()=>{
//         showProfile()
//     })
// })