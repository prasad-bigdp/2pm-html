// let arr = [5, 4, 8, 6, 9];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[25])
// arr[25] = "prasad"
// console.log(arr.length)
// arr[-3] = 65464;
// console.log(arr.length)
// arr = [5, 8, 7, 6, 9];
// // add one element at the end of the array
// arr.push(10, 11, 12, 13);
// console.log(arr);
// // remove last element of array
// arr.pop();
// console.log(arr);
// // add elements at the starting of the array
// arr.unshift(121, 122, 123);
// console.log(arr);
// // remove the first element of array
// arr.shift();
// console.log(arr);
// let arr = [5, 4, 7, 6, 9];
//add or remove elements at any place of array
//splice(starting index number, deleteCount, inserting elements)
// arr.splice(1,3,1,2,3,4,5,6,7);
// console.log(arr);


let arr = [5, 4, 3, 2, 1];

arr.forEach(function (ele,ind)
{
    console.log(ele*ele)
})

let str = "Javascript is so easy"
arr = str.split(' ');
arr.forEach(function (e, i)
{
    console.log(e.charAt(0));
})


arr = [5, 4, 3, 2, 1], sum = 0;
arr.forEach((e, i) => sum = sum + e);
console.log(sum);

// Task :  take an array and print whether each element in the array is even or odd
arr = [5, 4, 6, 7, 9];
// output: 5 is odd
//4 is even
// 6 is even
//7 is odd
//9 is odd
arr.foreach((e,i) =>
 {
   if(e%2==0)
    {
     console.log(`${e} is even number`)
    }
   else{
     console.log(`${e} is odd number`)
    }
  }
)





































