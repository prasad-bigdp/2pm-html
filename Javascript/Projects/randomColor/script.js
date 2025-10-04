function changeColors ()
{
    //RGB colour
    // let r = Math.floor(Math.random() * 256);
    // let g = Math.floor(Math.random() * 256);
    // let b = Math.floor(Math.random() * 256);
    // document.body.style.backgroundColor = `rgb(${r},${g},${b})`

    // arrays
    // let colors = ["red", "green", "blue", "yellow", "orange", "indigo", "pink", "violet", "aqua", "gray"];
    // let rIndex = Math.floor(Math.random() * 10) //0-9;
    // document.body.style.backgroundColor = colors[rIndex];

    //#a5e06c
    let rnum = Math.round(Math.random() * 10000000);
    let hexcode = rnum.toString(16)
    console.log(rnum,hexcode)
    document.body.style.backgroundColor = "#" + hexcode;
}