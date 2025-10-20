// // write a function 'greet' which prints "Hello World" in console
// function greet ()
// {
//     console.log("Hello World");
// }
// greet()

// //write a function which accepts name and prints "Hello World, name" in console
// greetWithName("prasad")
// function greetWithName (name)
// {
//  console.log(`Hello World , ${name}`)
// }

// // write a js function 'add'  that accepts two values and prints their sum
// function add (a=3, b=10)
// {
//     console.log(a + b);
// }
// // add(4, 5);
// // add(4);
// // add();
// add(5); add("raj", "prasad");
// add();
// add(5, 3);
// add(1, 2, 5);

// // write a function that prints short form of given sentence like "world health organization", output should be "WHO"
// function Abbr (str)
// {
//     let words = str.split(' ');
//     let s =''
//     for (let i of words)
//     {
//        s= s+i.charAt(0)
//     }
//     console.log(s);
// }
// Abbr("World Health Organization")

// // Write a function to print multiplication of two numbers and accept two numbers as parameters
// // let a = +prompt("enter first valid number")
// // let b = +prompt("enter second valid number")
// // mul(a, b);
// function mul (p=2, q=5)
// {
//     console.log(p*q)
// }
// mul(3)

// // functions can return values that comes to the place where they called

// // write a function that returns subtraction of two numbers
// function sub (a, b)
// {
//     return a - b;
// }

// let res = sub(5, 4);

// console.log(res);



// // function expression
// console.log(sub);
// function sub (a, b)
// {
//     return a - b;
// }
// console.log(sub);
// console.log(sub(5, 3))
// let x = function (a, b)
// {
//     return a - b;
// } // function expression
// console.log(x(5,3));
// let y = (a, b) =>  a - b

// console.log(y(5, 3))

// // convert below function into function expression and arrow function
// function square (n)
// {
//     return n * n;
// }
// console.log(square(5));
// //function expression
//  let s = function (n)
// {
//  return n*n;
// }
// console.log(s(5));
// //arrow function
// let s2 =(n) => n*n;
// console.log(s2(5));

// callback functions

// function cube (n)
// {
//     console.log(n * n * n);
// }
// console.log(cube);
// function calculator (a)
// {
//     a(5);
// }
// calculator(cube);

// function mad ()
// {
//     console.log("I'm mad")
// }
// function bad ()
// {
//     console.log("I'm bad")
// }
// function display (a, b)
// {
//     a();
//     b();
// }
// display(mad, bad)



// function avg (a,b,c)
// {
//     console.log((a+b+c)/3)
// }
// function subLogic (x)
// {
//     x(1,2,3)
// }
// function MainLogic (a)
// {
//     a(avg)
// }
// MainLogic(subLogic);


(function () {
	let pwd = "kfjhkjdfh6844343$#"
	console.log(pwd)
})()



function Outer ()
{
    let x = 5;
   return function inner ()
    {
        x++;
        console.log(x)
    }
}
let res = Outer();
res();
res();
res();

function crazyAdd (a)
{
    return function inner (b)
    {
        return a + b;
    }
}
let res1 = crazyAdd(5);
let res2 = res1(3);
console.log(res2)






































































































