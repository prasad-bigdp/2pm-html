function task1 ()
{
    const ele = document.getElementById('hw');
    ele.innerHTML = `The water formula is H<sub>2</sub>O
    <a href="https://www.google.com">click me</a>`
}
   const count = document.getElementById("count")
function task2 ()
{
    let c = count.textContent
    count.textContent = ++c;
    count.style.color="red"
}
function task3 ()
{
    let c = count.textContent
    count.textContent = --c
    count.style.color = "blue"
}

const task4 = () =>
{
    const i = document.querySelector('#image');
     i.src = "./bulb-on.png";
    i.style.transform="rotate(180deg)"
}
function task5 ()
{
    const i = document.getElementById('inp');
    let c = (i.value) % 2 == 0 ? "Even" : "Odd";
    document.getElementById('out').textContent = c;
}
function task6 ()
{
   document.getElementById("showHide").classList.toggle('hide') 
}
function task7 ()
{
    const i = document.getElementById('pwd');
    const b = document.getElementById('btn');
    if (i.type == "password")
    {
        i.type = "text"
        b.textContent = "hide🤣"
    }
    else
    {
        i.type = "password";
        b.textContent = "show👁️"
    }

}