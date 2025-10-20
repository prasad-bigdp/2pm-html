console.log(window);
const button = document.getElementById('btn');
let x;
button.addEventListener('click', function ()
{
    // x = window.open('https://amazon.in')
    // setTimeout(() => window.close(x), 5000)
    window.location.reload();
})

// it can find location details -- current web page details
console.log(window.location)
document.getElementById('back').addEventListener('click', function ()
{
    window.history.go(-2);
})

document.getElementById('gl').addEventListener('click', function ()
{
    // window.navigator.geolocation.getCurrentPosition((obj) =>
    // {
    //     console.log(obj.coords.latitude,obj.coords.longitude)
    // }, (err) =>
    // {
    //     console.log(err)
    // })
    // window.navigator.share({
    //     title: "Basic share material",
    //     text: "loremkjrhkjdhk efkjh jkdfjh kfdh hf hdj",
    //     url:"https://a@a.com"
    // })
    window.navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((s)=>document.getElementById('vd').srcObject = s)
    .catch((err)=>console.log(err))
})
