// Promises in JavaScript
let x = 10;
let p = new Promise(function (a,reject)
{
    if (x > 15)
    {
        setTimeout(()=>resolve("simple value"),2000)
    }
    else
    {
        reject("Error")
    }
})
console.log(p)
p
.then((res)=>console.log(res))
    .catch((err) => console.log(err))








// There are three friends a,b,c. a asks b some money, b asks some money c

let p2 = new Promise((resolve, reject) =>
{
    setTimeout(() => resolve(20), 5000);
})


p2
    .then((res) => res * 2)
    .then((res2) => res2 * 2)
    .then((res3) => console.log(res3))
    .catch((err) => console.log(err));
    


let a1 = Promise.resolve(5);
let a2 = Promise.resolve(6)
let a3 = Promise.resolve(7)

Promise.all([a1, a2, a3])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

let a4 = new Promise((resolve,reject)=>setTimeout(()=>resolve(5),5000))
let a5 = new Promise((resolve, reject) => setTimeout(() => reject("error"), 2000))
Promise.race([a4, a5])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
















