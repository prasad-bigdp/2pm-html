let api_key = "c63af84f3af04575b4190112251310"
const input = document.getElementById('inp');
const outputDiv = document.getElementById('output');
const btn = document.getElementById('btn')
async function getLocation ()
{
    // fetch(
    //     `https://api.weatherapi.com/v1/current.json?key=c63af84f3af04575b4190112251310&q=${input.value}&aqi=no`,
    // )
    //     .then((res) => res.json())
    //     .then((data) => displayData(data))
    //     .catch((err) => console.log(err));
    try
    {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=c63af84f3af04575b4190112251310&q=${input.value}&aqi=no`)
    const data = await res.json();
    displayData(data)
    }
    catch (err)
    {
        console.log(err)
    }
}
btn.addEventListener('click', getLocation);
function displayData (data)
{
    outputDiv.textContent =''
    const para = document.createElement('p');
    para.textContent =
			"Tempareture: " +
			data.current.temp_c +
			"Celsius" +
			" " +
			data.current.temp_f+"farenheit"
    outputDiv.appendChild(para)
    input.value =''
}