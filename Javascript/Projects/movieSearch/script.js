const input = document.getElementById('inp');
const button = document.getElementById('btn');
const outputDiv = document.getElementById('output');
function getMovies ()
{
    fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=3340a4f3`)
        .then((res) => res.json())
        .then((data) => displayData(data.Search))
        .catch((err) => console.log(err))
}
button.addEventListener('click', getMovies)
input.addEventListener('input', getMovies);
function displayData (data)
{
    outputDiv.textContent = '';
    data.forEach((ele, ind) =>
    {
        const mDiv = document.createElement('div');
        mDiv.classList.add('movie')
        const mTitle = document.createElement('h2');
        mTitle.textContent = ele.Title
        const mImage = document.createElement('img');
        mImage.src = ele.Poster;
        const mYear = document.createElement('p');
        mYear.textContent = ele.Year
        mDiv.append(mImage, mTitle, mYear);
        outputDiv.appendChild(mDiv)
    })
}