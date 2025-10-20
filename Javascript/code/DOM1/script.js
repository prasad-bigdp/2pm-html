// // let obj = {
// //     name: "Prasad",
// //     age: 55,
// //     email:"a@a.com"
// // }
// // console.log(obj.name);
// // console.log(obj['name'])
// // //methods of object
// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));
// // let obj2 = Object.create(obj);
// // console.log(obj2)
// // console.log(obj2.name);

// // const obj3 = {
// //     ename: "raj",
// //     salary :50000
// // }
// // console.log(obj3.phoneNumber);

// // obj3.phoneNumber = 8888;
// // console.log(obj3);
// // // restrict object
// // // Object.seal(obj3)
// // Object.freeze(obj3)
// // obj3.ename = "shekhar"
// // obj3.address ="Hyd"
// // console.log(obj3)
// //    let obj5 = {
// // 			name: "prasad",
// // 			fun: function () {
// // 				console.log("HII")
// // 			},
// // 		}
// // obj5.fun();
















// // let obj4 = Object.create(obj3);


// // console.log(obj4.ename)

// // To use elment, first we need to select

// const k = document.getElementsByTagName('h1');
// console.log(k[0]);
// console.log(k[0].textContent)
// k[0].textContent = "Bye world"
// const x = document.getElementsByTagName('p');
// console.log(x[0]);
// x[0].textContent =  "HIIIIIIIII"


// const ele = document.getElementsByClassName('link');
// ele[0].href = "https://www.instagram.com"

// let arr = [5, 4, 1, 6, 9]
// let f = -Infinity
// let s = -Infinity
// arr.forEach((e,i) =>
// {
//     if (e > f)
//     {
//         s = f;
//         f = e;
//     }
//     else if (e > s)
//     {
//         s = e;
//     }
// })

// DOM Selection
// we can select an element in 5 ways
// getElementsByTagName
// const heading = document.getElementsByTagName('h1')
// console.log(heading[0]);
// heading[0].textContent = "Bye World"

// const para = document.getElementsByTagName('p');
// let c = para[0].textContent;
// para[0].textContent = ++c

//getElementsByClassName
// const k = document.getElementsByClassName('head');
// console.log(k[0])
// k[0].textContent = "Bye World";

// const para = document.getElementsByClassName('para');
// let c = para[0].textContent;
// para[0].textContent = ++c

//getElementById
const k = document.getElementById('h');
k.textContent = "Bye World"

const link = document.getElementById('link');
link.href="https://www.quora.com"

const x = document.querySelector('.para');
console.log(x)

const y = document.querySelectorAll(".para")
console.log(y)

































































