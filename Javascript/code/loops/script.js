// // // print prasad name 5 times
// // // let count = 5;
// // // while (count >= 1)
// // // {
// // //     if (count == 3)
// // //     {
// // //        console.log("prasad")
// // //     }
// // //     else
// // //     {
// // //         console.log(count)
// // //     }
// // //     count--;
// // // }
// // // let num = 2;
// // // while (num <= 20)
// // // {
// // //     if (num % 2 == 0)
// // //     {
// // //         console.log(num)
// // //     }
// // //     num+=2;
// // // }
// // let num = 1, sum = 0;
// // while (num <= 5)
// // {
// //     sum = sum + num;
// //     num++;
// // }
// // console.log(sum)





// // we need rows and columns
// for (let r = 1; r <= 4; r++)
// {
//     let str = '';
//     for (let c = 1; c <= r; c++)
//     {
//        str= str +" "+ c
//     }
//     console.log(str)
// }





// //2nd way
// let s = ''
// for (let i = 1; i <= 4; i++)
// {
//     s = s + " " + i;
//     console.log(s)
// }
// /* J
//    J A
//    J A V
//    J A V A */

// let s1 = "JAVA",s2=''
// for (let i = 0; i < 4; i++) {
// 	s2= s2+" "+s1.charAt(i)
// 	console.log(s2) // J
// }

// console.log(s1.split(''))

// let arr = [8, 5, 4, 6, 1];
// // print array elements using for loop
// for (let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i],i)
// }

// //JS provides default ways to traverse array
// //for.. of
// for (let i of arr)
// {
//     console.log(i,arr.indexOf(i));
// }
// //for.. in
// for (let i in arr)
// {
//     console.log(i, arr[i]);
// }



let str = prompt("enetra a string"), revstr = '';
for (let i = str.length - 1; i >= 0; i--)
{
    revstr = revstr + str.charAt(i); 
}
if (str == revstr)
{
    console.log(`${str} is pallindrome`)
}
else
{
    console.log(`${str} is not pallindrome`)
}











