let c = 1;
const ele = document.getElementById("btn")
function incr (e)
{
    console.log(e)
    c= c*5;
    document.getElementById('count').textContent = c
}

ele.addEventListener('mouseover', function ()
{
    console.log("hi")
    ele.style.top = Math.floor(Math.random() * 100)+"%";
    ele.style.left = Math.floor(Math.random() * 100) + "%";
});
let y = 0;
document.addEventListener('keydown', function (e)
{

    if (e.ctrlKey && e.key == 'a')
    {
        console.log("hello world");
    }
    if (e.key == 'ArrowUp')
    {
        y -= 20;
        console.log(y)
        document.getElementById('image').style.transform = `translateY(${y}px)`
    }
     if (e.key == "ArrowDown") {
				y += 20
				console.log(y)
				document.getElementById("image").style.transform = `translateY(${y}px)`
			}
})


document.getElementById('fr').addEventListener("submit", function (e)
{
    e.preventDefault()
    console.log(e.target[0].value,e.target[1].value)
})