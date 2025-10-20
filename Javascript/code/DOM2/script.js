const mainDiv = document.getElementById('main');
function add ()
{
    const para = document.createElement('p'); //<p></p>
    para.textContent = "hello world";//<p>hello world</p>
    mainDiv.appendChild(para);
}
const imageInput = document.getElementById('imgInput');
function addImage ()
{
    const image = document.createElement('img');
    image.src = imageInput.value
    image.height = "200";
    mainDiv.appendChild(image)
}