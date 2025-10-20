const input = document.getElementById('inp');
const btn = document.getElementById('btn');
const outputDiv = document.getElementById('output');
let API_KEY = "AIzaSyCSBY85ub67u6QNtJuiIoGqqe9qSuykoxk"
async function getData ()
{
    try
    {
        const res = await fetch(
					`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`,
					{
						headers: {
							"x-goog-api-key": API_KEY,
							"Content-Type": "application/json",
						},
						method: "POST",
						body: JSON.stringify({
							contents: [
								{
									parts: [
										{
											text:"You are a mad guy who always answer rudely. you will never tell truth. you kind of confuse and manipulate people. you are always discouraging and pessimistic"+ input.value,
										},
									],
								},
							],
						}),
					},
        )
        const data = await res.json();
        console.log(data)
        displayData(data)
    }

    catch (err)
    {
        console.log(err)
    }
}
btn.addEventListener('click', getData);
function displayData (data)
{
    outputDiv.textContent = '';
    const para = document.createElement('p');
    para.innerHTML = data.candidates[0].content.parts[0].text;
    outputDiv.appendChild(para);
    input.value =''
}