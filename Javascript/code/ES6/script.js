// rest parameters
function sum (...c)
{
    let s = c.reduce((prev, curr) => prev + curr, 0) 
    console.log(s)
}
sum(5, 4, 6, 8, 9, 7)
sum(2, 3);
sum(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);

// spread operator

let arr = [5, 4, 3, 2, 1];
let arr2 = [...arr,6] // [[5,4,3,2,1],6]
console.log(arr2);
let a1 = [1, 2], a2 = [3, 4]
let a3 = [...a1, ...a2]
console.log(a3)

let n = "prasad"
// named export
export { n, arr, arr2, a1, a3, sum }

//default export
export default a2;