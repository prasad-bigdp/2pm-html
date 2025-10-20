const outputDiv = document.getElementById("output");
function getRandomPeople ()
{
    fetch(`https://randomuser.me/api`)
        .then((res) => res.json())
        .then((data) =>
        {
            if(data.results[0].gender == "female")
                displayData(data.results[0])
            else
                getRandomPeople()
        })
        .catch((err) => console.log(err))
}
getRandomPeople()
setInterval(()=>getRandomPeople(),10000)
function displayData (details)
{
    outputDiv.textContent =''
    const pname = document.createElement('h2');
    pname.textContent =
        details.name.title + details.name.first + " " + details.name.last;
    const pImage = document.createElement('img');
    pImage.src = details.picture.thumbnail;
    pImage.alt = details.name.first
    const pAge = document.createElement('p')
    pAge.textContent = details.dob.age;
    outputDiv.append(pImage,pname,pAge)
}