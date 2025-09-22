// write a function 'greet' which prints "Hello World" in console
function greet ()
{
    console.log("Hello World"); 
}
greet()

//write a function which accepts name and prints "Hello World, name" in console
greetWithName("prasad")
function greetWithName (name)
{
 console.log(`Hello World , ${name}`)   
}

// write a js function 'add'  that accepts two values and prints their sum
function add (a=3, b=10)
{
    console.log(a + b);
}
// add(4, 5);
// add(4);
// add();
add(5); add("raj", "prasad");
add();
add(5, 3);
add(1, 2, 5);

// write a function that prints short form of given sentence like "world health organization", output should be "WHO"
function Abbr (str)
{
    let words = str.split(' ');
    let s =''
    for (let i of words)
    {
       s= s+i.charAt(0)
    }
    console.log(s);
}
Abbr("World Health Organization")

// Write a function to print multiplication of two numbers and accept two numbers as parameters
// let a = +prompt("enter first valid number")
// let b = +prompt("enter second valid number")
// mul(a, b);
function mul (p=2, q=5)
{
    console.log(p*q)
}
mul(3)

// functions can return values that comes to the place where they called

// write a function that returns subtraction of two numbers
function sub (a, b)
{
    return a - b;
}

let res = sub(5, 4);

console.log(res);




































