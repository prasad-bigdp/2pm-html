// // let age = +prompt("Enter your age");
// // if (age >= 18)
// // {
// //     console.log("eligible to vote ");
// // }
// // else
// // {
// //     console.log("not eligible")
// // }

// // write JS code to check whether given number is positive or negitive
// // let num = +prompt("enter a number")
// // if (num > 0)
// // {
// //     console.log(`${num} is positive`)
// // }
// // else if (num < 0)
// // {
// //     console.log(`${num} is negitive`)
// // }
// // else
// // {
// //     console.log(`${num} is neither positive nor negitive`)
// // }

// // Write JS Code to check even or odd for only positive numbers
// // let num = +prompt("enter a number");
// // if (num > 0)
// // {
// //     if (num % 2 == 0)
// //     {
// //         console.log(`${num} is even number`)
// //     }
// //     else
// //     {
// //          console.log(num+'is ODD number')
// //     }
// // }

// // write JS code to generate a random between 1 to 14 and also accepts a number from user.
// // check if user guesses right,then print "user won"
// // else display whether userinput in greater than randomNumber or less than randomNumber
// // let randomNumber = Math.ceil(Math.random() * 14);
// // let userInput = +prompt("Enter a number between 1 - 14")
// // if (userInput == randomNumber)
// // {
// //     console.log("congratulations, you won")
// // }
// // else if (userInput > randomNumber)
// // {
// //     console.log(
// // 			`Your number(${userInput}) is greater than random number(${randomNumber})`
// // 		)
// // }
// // else
// // {
// //     console.log(
// // 			`Your number(${userInput}) is greater than random number(${randomNumber})`,
// // 		)
// // }

// // write a JS Code to check whether a 3digit input number is
// // pallindrome or not
// //pallindrome number is a number which is same in reverse order also
// //eg: 121 , 525
// /*let num = prompt("enter a 3 digit numer")
// if (num.length == 3)
// {
//     let n = +num;
//     let ln = n % 10;
//     let fn = Math.floor(n / 100)
//     if (fn == ln)
//     {
//         console.log(`${n} is a pallindrom`)
//     }
//     else
//     {
//        console.log(`${n} is not a pallindrome`)
//     }
// }
// else
// {
//     console.log("please enter only 3 digit number")
// }*/

// /* simple if */
// /* write a js code to print hello prasad, if user is prasad */
// // let user = "prasad"
// // if (user == "prasad")
// // {
// //     console.log("hello prasad")
// // }

// /* write a js code to check given year is leap year or not */
// // let year = +prompt("enter an year")
// // if (year % 4 == 0)
// // {
// //     console.log("it is a leap year")
// // }
// // else
// // {
// //     console.log("it is not a leap year")
// // }
// //nested if

// let year = +prompt("enter an year")
// if (year % 4 == 0 && year%100 !=0) {
//     console.log("it is leap year")
// }
// else if(year%100==0 && year%400 ==0)
// {
// 	console.log("it is  a leap year")
// }
// else
// {
//     console.log("it is not a leap year")
// }


// /* write a js code that prints day of week when number of the week is given */
// /* for eg: 0  -- sunday , 1 -- monday */
// // if (day == 0)
// // {
// //      console.log("sunday")
// // }
// // else if (day == 1)
// // {
// //     console.log("monday")
// // }
 
// let day = +prompt("enter number of the week 0-6")
// switch (day)
// {
//     case 3: console.log("Wednesday"); break;
//     case 0: console.log("sunday"); break;
//     case 1: console.log("Monday"); break;
//     case 2: console.log("Tuesday"); break;
//     case 4: console.log("Thursday"); break;
//     case 5: console.log("Friday"); break;
//     case 6: console.log("Saturday"); break;
//     default: console.log("enter valid input");
// }


























// write a js code to perform calculator between two numbers
// input a = 10 ,b =20, operator : +
let a = +prompt("enter first number") //10
let b = +prompt("enter second number") //20
let op = prompt("enter operator symbol + , - , * ,/")
switch (op)
{
    case '+': console.log(`a+b = ${a + b}`); break;
    case '-': console.log(`a-b = ${a - b}`); break;
    case '*': console.log(`a*b = ${a * b}`); break;
    case '/': console.log(`a/b = ${a / b}`); break;
    default : console.log("enter valid operator symbol")
}












