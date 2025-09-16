// let age = +prompt("Enter your age");
// if (age >= 18)
// {
//     console.log("eligible to vote ");
// }
// else
// {
//     console.log("not eligible")
// }

// write JS code to check whether given number is positive or negitive
// let num = +prompt("enter a number")
// if (num > 0)
// {
//     console.log(`${num} is positive`)
// }
// else if (num < 0)
// {
//     console.log(`${num} is negitive`)
// }
// else
// {
//     console.log(`${num} is neither positive nor negitive`)
// }

// Write JS Code to check even or odd for only positive numbers
// let num = +prompt("enter a number");
// if (num > 0)
// {
//     if (num % 2 == 0)
//     {
//         console.log(`${num} is even number`)
//     }
//     else
//     {
//          console.log(num+'is ODD number')
//     }
// }

// write JS code to generate a random between 1 to 14 and also accepts a number from user.
// check if user guesses right,then print "user won"
// else display whether userinput in greater than randomNumber or less than randomNumber
// let randomNumber = Math.ceil(Math.random() * 14);
// let userInput = +prompt("Enter a number between 1 - 14")
// if (userInput == randomNumber)
// {
//     console.log("congratulations, you won")
// }
// else if (userInput > randomNumber)
// {
//     console.log(
// 			`Your number(${userInput}) is greater than random number(${randomNumber})`
// 		)
// }
// else
// {
//     console.log(
// 			`Your number(${userInput}) is greater than random number(${randomNumber})`,
// 		)
// }

// write a JS Code to check whether a 3digit input number is
// pallindrome or not
//pallindrome number is a number which is same in reverse order also
//eg: 121 , 525
let num = prompt("enter a 3 digit numer")
if (num.length == 3)
{
    let n = +num;  
    let ln = n % 10;
    let fn = Math.floor(n / 100)
    if (fn == ln)
    {
        console.log(`${n} is a pallindrom`)
    }
    else
    {
       console.log(`${n} is not a pallindrome`) 
    }
}
else
{
    console.log("please enter only 3 digit number")
}


























