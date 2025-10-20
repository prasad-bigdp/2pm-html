// named imports
import * as k from './script.js'
import prasad from './script.js'
console.log(k.n)
k.sum(5, 6)
console.log(prasad)

// class User
// {
//     username; id; email; phno;
//     buySomething ()
//     {
        
//     }
//     sellSomething ()
//     {
        
//     }
// }
// // create an object
// let obj1 = new User()





// class Employee
// {
//     eid; ename; salary 
//     constructor(a,b,c)
//     {
//        this.eid = a; //current calling object
//        this.ename = b;
//        this.salary = c;
//     }
// }
// // create three objects
// let p1 = new Employee(111,"raj",20000)
// let p2 = new Employee(112, "shekhar", 50000)
// console.log(p2.salary);
class User
{
    username; email; pwd; age;
    constructor(a,b,c,d)
    {
        this.username = a;
        this.email = b;
        this.pwd = c;
        this.age = d;
    }
    doSomething ()
    {
        
    }
}
class Customer extends User
{
    amount;
    constructor(a, b, c, d, e)
    {
        super(a, b, c, d);
        this.amount = e;
   }  
}
let u1 = new User("something", "a@a.com", 142514, 25)
console.log(u1.age)
let u2 = new User("john", "x@s.com", 585858, 84)
let u3 = new Customer("dhfg","4ds@fdg",8858,85,10000)

class Prasad
{
    
}
console.log(typeof Prasad)