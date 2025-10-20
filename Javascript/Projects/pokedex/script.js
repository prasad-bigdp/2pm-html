const input = document.getElementById('inp');
const btn = document.getElementById('btn');
const outputDiv = document.getElementById('output');

async function getPokemonDetails ()
{
    // fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    //     .then((res) => res.json())
    //     .then((data) =>displayData(data))
    //     .catch((err) => console.log(err))
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    const data = await res.json()
    displayData(data)
}
btn.addEventListener('click', getPokemonDetails);
function displayData (data)
{
    outputDiv.textContent =''
    const pname = document.createElement('h2');
    pname.textContent = data.name
    const pImage = document.createElement('img');
    pImage.src = data.sprites.front_default;
    pImage.alt = data.name;
    const para = document.createElement('p');
    para.textContent = "HEight: " + data.height + " ,weight: " + data.weight
    outputDiv.append(pImage, pname, para)
    input.value = ''
}



