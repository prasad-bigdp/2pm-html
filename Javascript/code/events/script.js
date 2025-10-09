// let c = 1;
// const ele = document.getElementById("btn")
// function incr (e)
// {
//     console.log(e)
//     c= c*5;
//     document.getElementById('count').textContent = c
// }

// ele.addEventListener('mouseover', function ()
// {
//     console.log("hi")
//     ele.style.top = Math.floor(Math.random() * 100)+"%";
//     ele.style.left = Math.floor(Math.random() * 100) + "%";
// });
// let y = 0;
// document.addEventListener('keydown', function (e)
// {

//     if (e.ctrlKey && e.key == 'a')
//     {
//         console.log("hello world");
//     }
//     if (e.key == 'ArrowUp')
//     {
//         y -= 20;
//         console.log(y)
//         document.getElementById('image').style.transform = `translateY(${y}px)`
//     }
//      if (e.key == "ArrowDown") {
// 				y += 20
// 				console.log(y)
// 				document.getElementById("image").style.transform = `translateY(${y}px)`
// 			}
// })


const emailInput = document.getElementById("inpEmail")
const passwordInput = document.getElementById("inpPassword")
document.getElementById('fr').addEventListener("submit", function (e)
{
    e.preventDefault()
    verifyInputs()
})
function verifyInputs ()
{
    console.log(emailInput.value, passwordInput.value)
    if (emailInput.value == '')
    {
        addErrors("Email is Required")
    }
    if (passwordInput.value == '')
    {
        addErrors("password is required")
    }
}
function addErrors (msg)
{
    const p = document.createElement('p');
    p.textContent = msg;
    document.getElementById('errors').appendChild(p)
}
emailInput.addEventListener('input', function ()
{
    let emailregex = /[A-Za-z0-9.-]+@[A-Za-z]+\.[A-Za-z]{2,}/
    if (!emailregex.test(emailInput.value))
    {
       document.getElementById('errors').textContent = ''
     addErrors("enter valid email")
    }
    else
    {
        document.getElementById('errors').textContent = ''
    }
})
passwordInput.addEventListener('input', function ()
{
    let passwordRegex = /(.*[a-z]+)(.*[A-Z]+)(.*[0-9]+)/
    if (passwordInput.value.length <8)
    {
        addErrors("Passworld should be atleast 8 characters")
    }
})











