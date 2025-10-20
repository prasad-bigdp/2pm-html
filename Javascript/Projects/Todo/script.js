let bucketArray = [];
let wishInput = document.getElementById('wish');
let dateTimeInput = document.getElementById('dt');
let mainDiv = document.getElementById("list")
function checkEmpty(){
    if (bucketArray.length == 0)
    {
        const para = document.createElement('p');
        para.textContent = "There are no wishes";
        mainDiv.appendChild(para)
   }
}
checkEmpty()
function addWish ()
{
    let obj = {
        name: wishInput.value,
        date: dateTimeInput.value,
        isCompleted : false
    }
    bucketArray.push(obj);
    console.log(bucketArray)
    showArray(bucketArray);
}
function showArray (arr)
{
    mainDiv.textContent = '';
    arr.forEach((ele,ind) =>
    {
        const divv = document.createElement('div');
        divv.classList.add('wish')
        const para1 = document.createElement('p');
        para1.textContent = ele.name;
        const para2 = document.createElement("p")
        para2.textContent = ele.date
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        const dlte = document.createElement("button")
        dlte.textContent = "❎"
        dlte.onclick = ()=>deleteMyWish(ind)
        divv.append(para1, para2, checkbox, dlte)
        mainDiv.appendChild(divv)
    })
    wishInput.value = '';
    dateTimeInput.value = '';
}
function deleteMyWish (ind)
{
    bucketArray.splice(ind, 1);
    showArray(bucketArray);
    checkEmpty()
}