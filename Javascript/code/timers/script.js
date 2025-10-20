// setTimeout(function ()
// {
//     console.log("hiii")
// }, 0)
// for (let i = 1; i <= 10000; i++)
// {
//     console.log("bye")
// }
// // let timer = setTimeout(() =>
// // {
// //     document.body.textContent = '';
// // }, 10000)
// let c = 0;

// document.getElementById('btn').addEventListener('click',() =>
// {
//     clearTimeout(timer)
// })

// let counter = setInterval(() =>
// {
//     c++;
//     document.getElementById("count").textContent = c;
//     if (c == 10000)
//     {
//         clearInterval(counter);
//     }
// }, 0.02)


let t = 0.2
const p = new Promise((resolve,reject) =>
{
    if (t < 1)
    {
        setTimeout(resolve("clothes are washed"), 2000)
    }
    else
    {
        reject("ho gaya , khatam")
    }
})

//fronend

p.then((res)=>console.log(res))
.catch((err)=>console.log(err))






















